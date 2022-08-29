let taskArr = [];
let form = document.getElementById("form");

class Task {
  constructor(title, description, start, end, done) {
    this.title = title;
    this.description = description;
    this.start = start;
    this.end = end;
    this.done = done;
  }
}

function createTask(taskName, description, start, end, done) {
  if (taskName === "" || description === "" || start === "" || end === "") {
    alert("Please fill all the fields");
  } else {
    let newTask = new Task(taskName, description, start.replace("T", " At: "), end.replace("T", " at "), done);
    form.reset();
    return newTask;
  }
}

function toLocalStorage() {
  let taskName = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let start = document.getElementById("startDate").value;
  let end = document.getElementById("endDate").value;
  let newTask = createTask(taskName, description, start, end, "false");
  if (localStorage.getItem("tasks") == null) {
    localStorage.setItem("tasks", "[]");
  }
  let oldArr = JSON.parse(localStorage.getItem("tasks"));
  oldArr.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(oldArr));
}

document.getElementById("submit").addEventListener("click", toLocalStorage);
