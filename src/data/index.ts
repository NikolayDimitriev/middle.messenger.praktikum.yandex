import { TMessages, TDialogue, TAuth, TProfile } from './data.props';

export const messages: TMessages = [
  {
    date: '17 июня',
    messages: [
      {
        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории.`,
        image: null,
        date: '11:56',
        owner: false,
        isReaded: true,
      },
      {
        text: 'Круто!',
        image: null,
        date: '11:59',
        owner: true,
        isReaded: true,
      },
    ],
  },
  {
    date: '19 июня',
    messages: [
      {
        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в 
          какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.`,
        image: null,
        date: '11:56',
        owner: false,
        isReaded: true,
      },
      {
        text: 'Круто!',
        image: null,
        date: '11:59',
        owner: true,
        isReaded: true,
      },
    ],
  },
];

export const dialogues: TDialogue[] = [
  {
    user: {
      name: 'Вадим',
      avatarSrc: null,
    },
    lastMessage: {
      text: 'Hello too!',
      image: null,
      date: '11:59',
      owner: false,
    },
    newMessagesCount: 1,
  },
  {
    user: {
      name: 'Киноклуб',
      avatarSrc: null,
    },
    lastMessage: {
      text: 'Cool!',
      image: null,
      date: '12:00',
      owner: true,
    },
    newMessagesCount: null,
  },
  {
    user: {
      name: 'Илья',
      avatarSrc: null,
    },
    lastMessage: {
      text: 'Друзья, товарищи!',
      image: null,
      date: '13:00',
      owner: false,
    },
    newMessagesCount: 4,
  },
];

export const logIn: TAuth = [
  {
    id: 'login-auth',
    placeholder: 'Логин',
    labelText: 'Логин',
    name: 'login',
    inputType: 'text',
    errMessage:
      'Длина 3-20 символов. Разрешено: цифры (в сочетании с буквами), буквы, дефис и подчеркивание',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
  {
    id: 'password-auth',
    placeholder: 'Пароль',
    labelText: 'Пароль',
    name: 'password',
    inputType: 'password',
    errMessage: 'Длина 8-40 символов. Хотя бы одна заглавная буква и цифра!',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
];

export const signUp: TAuth = [
  {
    id: 'email-registration',
    placeholder: 'Почта',
    labelText: 'Почта',
    name: 'email',
    inputType: 'email',
    errMessage:
      'Только латиница, цифры, спец.символы, обяз. @ буквы и точка после неё!',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
  {
    id: 'login-registration',
    placeholder: 'Логин',
    labelText: 'Логин',
    name: 'login',
    inputType: 'text',
    errMessage:
      'Длина 3-20 символов. Разрешено: цифры (в сочетании с буквами), буквы, дефис и подчеркивание',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
  {
    id: 'first-name-registration',
    placeholder: 'Имя',
    labelText: 'Имя',
    name: 'first_name',
    inputType: 'text',
    errMessage: 'Первая буква - заглавная! Разрешено: буквы и дефис.',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
  {
    id: 'second-name-registration',
    placeholder: 'Фамилия',
    labelText: 'Фамилия',
    name: 'second_name',
    inputType: 'text',
    errMessage: 'Первая буква - заглавная! Разрешено: буквы и дефис.',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
  {
    id: 'phone-registration',
    placeholder: 'Телефон',
    labelText: 'Телефон',
    name: 'phone',
    inputType: 'text',
    errMessage: 'Длина 10-15 сиволов. Только цифры, может начинать с +!',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
  {
    id: 'password-registration',
    placeholder: 'Пароль',
    labelText: 'Пароль',
    name: 'password',
    inputType: 'password',
    errMessage: 'Длина 8-40 символов. Хотя бы одна заглавная буква и цифра!',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
  {
    id: 'password-registration-two',
    placeholder: 'Пароль (ещё раз)',
    labelText: 'Пароль (ещё раз)',
    name: 'password_two',
    inputType: 'password',
    errMessage: 'Пароли не совпадают!',
    labelClass: 'field__label',
    inputClass: 'field__input',
    isError: false,
  },
];

export const user: TProfile = {
  fields: [
    {
      id: 'email-profile',
      labelText: 'Почта',
      name: 'email',
      inputType: 'email',
      value: 'pochta@yandex.ru',
      errMessage:
        'Только латиница, цифры, спец.символы, обяз. @ буквы и точка после неё!',
      disabled: true,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
    {
      id: 'login-profile',
      labelText: 'Логин',
      name: 'login',
      inputType: 'text',
      value: 'ivanivanov',
      errMessage:
        // eslint-disable-next-line max-len
        'Длина 3-20 символов. Разрешено: цифры (в сочетании с буквами), буквы, дефис и подчеркивание',
      disabled: true,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
    {
      id: 'first-name-profile',
      labelText: 'Имя',
      name: 'first_name',
      inputType: 'text',
      value: 'Иван',
      errMessage: 'Первая буква - заглавная! Разрешено: буквы и дефис.',
      disabled: true,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
    {
      id: 'second-name-profile',
      labelText: 'Фамилия',
      name: 'second_name',
      inputType: 'text',
      value: 'Иванов',
      errMessage: 'Первая буква - заглавная! Разрешено: буквы и дефис.',
      disabled: true,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
    {
      id: 'display-name-profile',
      labelText: 'Имя в чате',
      name: 'display_name',
      inputType: 'text',
      value: 'Иван',
      errMessage: 'Первая буква - заглавная! Разрешено: буквы и дефис.',
      disabled: true,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
    {
      id: 'phone-profile',
      labelText: 'Телефон',
      name: 'phone',
      inputType: 'text',
      value: 79999999999,
      errMessage: 'Длина 10-15 сиволов. Только цифры, может начинать с +!',
      disabled: true,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
  ],

  passwords: [
    {
      id: 'old-password-profile',
      labelText: 'Старый пароль',
      name: 'password',
      inputType: 'password',
      value: '',
      errMessage: 'Длина 8-40 символов. Хотя бы одна заглавная буква и цифра!',
      disabled: false,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
    {
      id: 'new-password-profile',
      labelText: 'Новый пароль',
      name: 'password_two',
      inputType: 'password',
      value: '',
      errMessage: 'Длина 8-40 символов. Хотя бы одна заглавная буква и цифра!',
      disabled: false,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
    {
      id: 'new-password-profile-two',
      labelText: 'Повторите новый пароль',
      name: 'password_three',
      inputType: 'password',
      value: '',
      errMessage: 'Пароли не совпадают!',
      disabled: false,
      inputClass: 'profile-field__input',
      labelClass: 'profile-field__label',
      isError: false,
    },
  ],

  shortFormat: {
    avatarSrc: null,
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+7 999 999 99 99',
    oldPassword: '1234',
    newPassword: '123456',
  },
};
