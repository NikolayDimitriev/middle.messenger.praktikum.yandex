export const messages = {
  messages: [
    {
      text: "Hello world!",
      image: null,
      date: "11:56",
      owner: true,
    },
    {
      text: "Hello too!",
      image: null,
      date: "11:59",
      owner: false,
    },
  ],
};

export const logIn = {
  inputs: [
    {
      id: "login-auth",
      placeholder: "Логин",
      label: "Логин",
      name: "login",
      inputType: "text",
      errMessage: "Неверный логин",
    },
    {
      id: "password-auth",
      placeholder: "Пароль",
      label: "Пароль",
      name: "password",
      inputType: "password",
      errMessage: "Неверный пароль",
    },
  ],
};

export const signUp = {
  inputs: [
    {
      id: "email-registration",
      placeholder: "Почта",
      label: "Почта",
      name: "email",
      inputType: "email",
      errMessage: "",
    },
    {
      id: "login-registration",
      placeholder: "Логин",
      label: "Логин",
      name: "login",
      inputType: "text",
      errMessage: "",
    },
    {
      id: "first-name-registration",
      placeholder: "Имя",
      label: "Имя",
      name: "first_name",
      inputType: "text",
      errMessage: "",
    },
    {
      id: "second-name-registration",
      placeholder: "Фамилия",
      label: "Фамилия",
      name: "second_name",
      inputType: "text",
      errMessage: "",
    },
    {
      id: "phone-registration",
      placeholder: "Телефон",
      label: "Телефон",
      name: "phone",
      inputType: "text",
      errMessage: "",
    },
    {
      id: "password-registration",
      placeholder: "Пароль",
      label: "Пароль",
      name: "password",
      inputType: "password",
      errMessage: "",
    },
    {
      id: "password-registration-two",
      placeholder: "Пароль (ещё раз)",
      label: "Пароль (ещё раз)",
      name: "password",
      inputType: "password",
      errMessage: "Пароли не совпадают",
    },
  ],
};

export const dialogues = {
  dialogues: [
    {
      user: {
        name: "Вадим",
        avatar: null,
      },
      lastMessage: {
        text: "Hello too!",
        image: null,
        date: "11:59",
        owner: false,
      },
      newMessagesCount: 1,
    },
    {
      user: {
        name: "Киноклуб",
        avatar: null,
      },
      lastMessage: {
        text: "Cool!",
        image: null,
        date: "12:00",
        owner: true,
      },
      newMessagesCount: null,
    },
    {
      user: {
        name: "Илья",
        avatar: null,
      },
      lastMessage: {
        text: "Друзья, товарищи!",
        image: null,
        date: "13:00",
        owner: false,
      },
      newMessagesCount: 4,
    },
  ],
};

export const user = {
  first_name: "Вадим",
  second_name: "Иванов",
  login: "vadik",
  email: "vadik@mail.ru",
  phone: "+7 (999) 999 99 99 ",
};