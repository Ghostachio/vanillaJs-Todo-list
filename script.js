const task = document.querySelector("#task");
const add = document.querySelector(".add");
const list = document.querySelector(".todos-list");
const isCheck = document.querySelector(".isCheck");
const numTasks = document.querySelector("#numTasks");
const clear = document.querySelector("#clear");
const allDone = document.querySelector("#all-done");
const markDone = document.querySelector(".markDone");
const item = document.querySelector(".item");

let todos = [];

const renderTodos = () => {
  list.innerHTML = "";
  todos.forEach((el, i) => {
    const check = document.createElement("input");
    check.checked = el.isDone;
    check.setAttribute("type", "checkbox");
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const deletebtn = document.createElement("span");
    deletebtn.classList.add("material-symbols-outlined", "remove");
    check.classList.add("isCheck");
    deletebtn.innerText = "delete";
    li.appendChild(check);
    li.appendChild(h3);
    li.appendChild(deletebtn);

    h3.innerText = el.task;
    list.appendChild(li);

    check.addEventListener("change", () => {
      el.isDone = check.checked;
      h3.classList.toggle("done");
      console.log(el.isDone);
    });
    deletebtn.addEventListener("click", () => {
      li.remove();
      removeTask(el.id);
    });
    if (el.isDone) {
      h3.classList.add("done");
    }
  });

  if (todos.length > 1) {
    numTasks.innerText = `${todos.length} Tasks To Do`;
  } else if (todos.length === 1) {
    numTasks.innerText = "1 Task For Today  ";
  } else {
    numTasks.innerText = "No Tasks For Today yet ";
  }
};

const addTodo = () => {
  const randomId = Math.floor(Math.random() * 1000);
  if (!task.value) return;
  const todo = { id: randomId, task: task.value, isDone: false };
  todos.push(todo);
  task.value = "";
  renderTodos();
};

const removeTask = (id) => {
  todos = todos.filter((el) => el.id !== id);
  renderTodos();
};

add.addEventListener("click", () => {
  addTodo();
});

clear.addEventListener("click", () => {
  todos = [];
  renderTodos();
});

allDone.addEventListener("click", () => {
  for (let todo of todos) {
    todo.isDone = true;
  }
  console.log(todos);
  renderTodos();
});
