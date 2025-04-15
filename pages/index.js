import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import toDo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupwithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const addToDoPopup = new PopupwithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: () => {},
});

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  const todo = new toDo(data, "#todo-template");
  const toDoElement = todo.getView();
  return toDoElement;
};

addTodoButton.addEventListener("click", () => {
  addToDoPopup.open();
});

addToDoPopup.setEventListeners();

//addTodoCloseBtn.addEventListener("click", () => {
//  addToDoPopup.close();
//});

const renderTodo = (item) => {
  const todo = generateTodo(item);
  section.addItem(todo);
};

//addTodoForm.addEventListener("submit", (evt) => {
//  evt.preventDefault();
//  const name = evt.target.name.value;
//  const dateInput = evt.target.date.value;
//
//  const date = new Date(dateInput);
//  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
//
//  const id = uuidv4();
//  const values = { name, date, id };
//  renderTodo(values);
//  newFormValidator.resetValidation();
//  addToDoPopup.close();
//});

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const toDo = generateTodo(item);
    section.addItem(toDo);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

//initialTodos.forEach((item) => {
//  renderTodo(item);
//});

const newFormValidator = new FormValidator(validationConfig, addTodoForm);
newFormValidator.enableValidation();
