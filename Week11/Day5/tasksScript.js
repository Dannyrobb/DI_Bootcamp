let taskListJson = localStorage.getItem("tasks");
let taskListParse = JSON.parse(taskListJson);
console.log(taskListParse);
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

taskListParse.sort(compare);
taskListParse.forEach((element) => {
  let taskCard = document.createElement("div");
  let title = document.createElement("p");
  let startDate = document.createElement("p");
  let select = document.createElement("select");
  let selectTitle = document.createElement("option");
  let selectDescription = document.createElement("option");
  let checkBox = document.createElement("input");
  let checkLabel = document.createElement("label");
  checkBox.setAttribute("name", "checkbox");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("id", "checkBox");
  checkLabel.setAttribute("for", "checkbox");
  checkLabel.innerText = "Done";
  selectDescription.setAttribute("disabled", true);
  select.setAttribute("id", "description");
  selectTitle.setAttribute("selected", "selected");
  selectTitle.textContent = "Description";
  selectDescription.textContent = element.description;
  taskCard.setAttribute("class", "card");
  let daysLeft = document.createElement("p");
  let start = new Date(element.start.split(" ")[0]);
  let end = new Date(element.end.split(" ")[0]);
  let combined = ((start.getTime() - end.getTime()) / (1000 * 3600 * 24)) * -1;
  title.textContent = `Task Name: ${element.title}`;
  startDate.textContent = `Start Date: ${element.start}`;
  if (combined > 1) {
    daysLeft.textContent = combined + " days left to complete this task";
  } else {
    daysLeft.textContent = combined + " day left to complete this task";
  }
  container.append(taskCard);
  taskCard.append(checkBox, checkLabel, title, startDate, daysLeft, select);
  select.append(selectTitle, selectDescription);
  console.log(element);
});
