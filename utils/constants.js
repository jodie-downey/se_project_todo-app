const initialTodos = [
  {
    id: "7cec7373-681b-49d9-b065-021d61a69d03",
    name: "Read the sprint's theory",
    completed: true,
    date: new Date(),
  },
  {
    id: "a7bfd5ef-37cc-4fa6-89f2-cac098a8aeba",
    name: "Read project instructions",
    completed: false,
    date: new Date(),
  },
  {
    id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
    name: "Complete project",
    completed: false,
    date: new Date(),
  },
];

const validationConfig = {
  _formSelector: ".popup__form",
  _inputSelector: ".popup__input",
  _submitButton: ".popup__button",
  _errorClass: "popup__error_visible",
  _inputErrorClass: "popup__input_type_error",
  _inactiveButtonClass: "button_disabled",
};

export { initialTodos, validationConfig };
