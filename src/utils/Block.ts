import EventBus from './EventBus';
import { nanoid } from 'nanoid';

export type TProps = Record<string, any> & {
  events?: Record<string, (e?: Event) => void>;
  classname?: string[];
  attr?: Record<string, string>;
  page?: Block<TProps>;
};

enum EVENTS {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

type TChildren = Record<string, Block<TProps>>;

export default abstract class Block<T extends TProps> {
  public id: string = nanoid(6);
  private _element: HTMLElement | null = null;
  private _meta: { tagName: string; props: T };
  private eventBus: () => EventBus;

  protected children: TChildren;
  protected props: T;

  constructor(tagName = 'div', propsWithChildren: T = {} as T) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      tagName,
      props,
    };

    this.children = children;

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  private _getChildrenAndProps(childrenAndProps: T): {
    props: T;
    children: TChildren;
  } {
    const props: T = {} as T;
    const children: TChildren = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key as keyof T] = value;
      }
    });

    return { props: props as T, children };
  }

  private _addEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEvents(): void {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  private _addAttribute(): void {
    const { attr = {} } = this.props;

    Object.entries(attr).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(EVENTS.INIT, this._init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init(): void {
    this._createResources();

    this.init();

    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  protected init(): void {
    return;
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    Object.values(this._element).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  protected componentDidMount(): void {
    return;
  }

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(EVENTS.FLOW_CDM);
    if (Object.keys(this._element).length) {
      this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }

  private _componentDidUpdate(oldProps: any, newProps: any): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(oldProps: T, newProps: T) {
    console.log(oldProps, newProps);
    return true;
  }

  public setProps = (nextProps: T) => {
    if (!nextProps) {
      return;
    }

    const { children, props } = this._getChildrenAndProps(nextProps);

    if (Object.values(children).length) {
      Object.assign(this.children, children);
    }

    if (Object.values(props).length) {
      Object.assign(this.props, props);
    }
  };

  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();

    this._removeEvents();

    this._element.innerHTML = '';

    this._element.append(block);

    this._addEvents();

    this._addAttribute();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: T) {
    return new Proxy(props, {
      get(target: T, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: T, prop: string, value) => {
        const oldTarget = { ...target };
        target[prop as keyof T] = value;

        this.eventBus().emit(EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  protected compile(tpl: (context: T) => string, context: T = {} as T) {
    const stubs: Record<string, string | string[]> = {};

    Object.entries(this.children).forEach(([name, component]) => {
      stubs[name] = `<div data-id="${component.id}" />`;
    });

    const html = tpl({ ...context, ...stubs });

    const temp = document.createElement('template');
    temp.innerHTML = html;

    Object.entries(this.children).forEach(([, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
      if (!stub) {
        return;
      }

      stub.replaceWith(component.getContent());
    });

    return temp.content;
  }
}
