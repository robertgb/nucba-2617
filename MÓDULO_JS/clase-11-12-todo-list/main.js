const input = document.querySelector(".input-text");
const addForm = document.querySelector(".add-form");
const tasksList = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector(".deleteAll-btn");

let ID = 1;
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const createHTMLTask = ({ id, name }) =>
  `<li>${name} <img class="delete-btn" src="./img/delete.svg" alt="botón de borrar" data-id="${id}" /></li>`;

const saveToLocalStorage = (todoList) => {
  localStorage.setItem("tasks", JSON.stringify(todoList));
};

const renderTasksList = (tasks = []) => {
  const allTasks = tasks.map((task) => createHTMLTask(task)).join("");
  tasksList.innerHTML = allTasks;
};

const addTask = (e) => {
  e.preventDefault();
  const taskName = input.value;
  if (taskName.trim().length === 0) return;
  const newTask = {
    id: ID,
    name: taskName,
  };

  tasks = [...tasks, newTask];
  ID++;
  input.value = "";

  renderTasksList(tasks);
  hideDeleteAll(tasks);
  saveToLocalStorage(tasks);
};

const deleteTask = (e) => {
  if (!e.target.classList.contains("delete-btn")) return;
  console.log(e.target);
  const taskIdToDelete = parseInt(e.target.dataset.id);
  tasks = tasks.filter((task) => task.id !== taskIdToDelete);
  renderTasksList(tasks);
  hideDeleteAll(tasks);
  saveToLocalStorage(tasks);
};

const deleteAll = () => {
  tasks = [];
  renderTasksList(tasks);
  hideDeleteAll(tasks);
  saveToLocalStorage(tasks);
};

const hideDeleteAll = (todoList) => {
  if (todoList.length === 0) {
    deleteAllBtn.classList.add("hidden");
    return;
  }
  deleteAllBtn.classList.remove("hidden");
};

function init() {
  renderTasksList(tasks);
  hideDeleteAll(tasks);
  addForm.addEventListener("submit", addTask);
  tasksList.addEventListener("click", deleteTask);
  deleteAllBtn.addEventListener("click", deleteAll);
}

init();
