const task = document.querySelector("#task");
const add = document.querySelector(".add");
const list = document.querySelector(".todos-list");

const todos = [];

const addTodo = () => {
  list.innerHTML = "";
  const todo = { task: task.value, isDone: false };
  todos.push(todo);
  todos.map((el, i) => {
    const li = document.createElement("li");
    li.innerText = el.task;
    list.appendChild(li);
  });
  task.value = "";

  console.log(todos);
};

add.addEventListener("click", () => {
  console.log(task.value);
  addTodo();
});
