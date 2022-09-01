let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];
let container = document.getElementById("container");

function compare(a, b) {
  if (a.start.split(" ")[0] < b.start.split(" ")[0]) {
    return -1;
  }
  if (a.start.split(" ")[0] > b.start.split(" ")[0]) {
    return 1;
  }
  return 0;
}

function createOption(text) {
  let create = document.createElement("option");
  create.textContent = text;
  return create;
}

function createParagraph(text) {
  let create = document.createElement("p");
  create.textContent = text;
  return create;
}

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

taskArr.sort(compare);
taskArr.forEach((element, i) => {
  //title
  let title = createParagraph(`Task Name: ${element.title}`);

  //dates
  let start = new Date(element.start.split(" ")[0]);
  let end = new Date(element.end.split(" ")[0]);
  let combined = ((start.getTime() - end.getTime()) / (1000 * 3600 * 24)) * -1;
  let startDate = createParagraph(`Start Date: ${element.start}`);
  let daysLeft = createParagraph(combined + " days left to complete this task");

  //card
  let taskCard = document.createElement("div");
  taskCard.setAttribute("class", "card");

  //delete button
  let deleteTask = document.createElement("button");
  deleteTask.setAttribute("id", "deleteBtn");
  deleteTask.textContent = "x";

  //select
  let select = document.createElement("select");
  select.setAttribute("id", "description");

  let selectTitle = createOption("Description");
  selectTitle.setAttribute("selected", "selected");

  let selectDescription = createOption(element.description);
  selectDescription.setAttribute("disabled", true);

  //check box
  let checkBox = document.createElement("input");
  let checkBoxAttributes = { name: "checkbox", type: "checkbox", id: "checkBox" };
  setAttributes(checkBox, checkBoxAttributes);
  checkBox.checked = element.done;

  //check box label
  let checkLabel = document.createElement("label");
  checkLabel.setAttribute("for", "checkbox");
  checkLabel.textContent = "Done";

  //delete task
  deleteTask.addEventListener("click", () => {
    let confirmDelete = confirm("Are you sure you would like delete this Task? : " + element.title);
    if (confirmDelete == true) {
      taskArr.splice(i, 1);
      taskCard.remove();
      localStorage.setItem("tasks", JSON.stringify(taskArr));
    }
  });

  //check box listener
  checkBox.addEventListener("change", function () {
    taskArr[i].done = this.checked;
    localStorage.setItem("tasks", JSON.stringify(taskArr));
  });

  //append
  container.append(taskCard);
  taskCard.append(deleteTask, checkBox, checkLabel, title, startDate, daysLeft, select);
  select.append(selectTitle, selectDescription);
});
