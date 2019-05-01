async function init() {
  resetTaskList();
  addButtonListener();
  addFormListener();
}

function addButtonListener() {
  const [addButton] = document.getElementsByClassName("add-task");

  addButton.addEventListener("click", () => {
    addButton.style.display = "none";
    const [form] = document.getElementsByClassName("form");
    form.style.display = "block";
  });
}

function addFormListener() {
  const [form] = document.getElementsByTagName("form");
  const [name, finished] = document.getElementsByTagName("input");
  const [description] = document.getElementsByTagName("textarea");
  form.addEventListener("submit", event => {
    const newTask = {
      name: name.value,
      finished: finished.value,
      description: description.value
    };
    event.preventDefault();

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(resetTaskList);
  });
}

async function resetTaskList() {
  const res = await fetch("http://localhost:3000/tasks", {
    method: "GET"
  });
  const [list] = document.getElementsByClassName("list-group");
  Array.from(list.childNodes).forEach(node => node.remove());
  const tasks = await res.json();
  tasks.forEach(addTask);
}

function addTask(task) {
  const [list] = document.getElementsByClassName("list-group");
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.innerHTML = `${
    task.name
  }<span class="badge badge-secondary">${task.finished * 100}%</span>`;
  list.appendChild(listItem);
}

window.addEventListener("DOMContentLoaded", init);
