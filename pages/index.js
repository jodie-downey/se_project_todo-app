import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import toDo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupwithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/ToDoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

function handleCompleted(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDeleted(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

function handleTotal(increment) {
  todoCounter.updateTotal(increment);
}

const addToDoPopup = new PopupwithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const date = inputValues.date;
    const id = uuidv4();
    renderTodo(inputValues);
    newFormValidator.resetValidation();
    addToDoPopup.close();
  },
});

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  const todo = new toDo(
    data,
    "#todo-template",
    handleCompleted,
    handleDeleted,
    handleTotal
  );
  const toDoElement = todo.getView();
  return toDoElement;
};

addTodoButton.addEventListener("click", () => {
  addToDoPopup.open();
});

addToDoPopup.setEventListeners();

const renderTodo = (item) => {
  const todo = generateTodo(item);
  section.addItem(todo);
  handleTotal(true);
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const toDo = generateTodo(item);
    section.addItem(toDo);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

const newFormValidator = new FormValidator(validationConfig, addTodoForm);
newFormValidator.enableValidation();
