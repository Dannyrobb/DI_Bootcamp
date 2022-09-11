const body = document.querySelector("body");
const form = document.getElementById("form");
const item = document.getElementById("item");
const amount = document.getElementById("amount");
const table = document.getElementById("table");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const itemVal = item.value;
  const amountVal = amount.value;
  appendToDom(itemVal, amountVal);
  fetch("/shoppinglist", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      itemVal,
      amountVal,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

function appendToDom(item, amount) {
  const tr = document.createElement("tr");
  const tdItem = document.createElement("td");
  const tdAmount = document.createElement("td");
  tr.setAttribute("style", " border: 1px solid #dddddd; text-align: left; padding: 8px;");
  tdItem.setAttribute("style", " text-align: left; padding: 8px;min-width:75px;");
  tdAmount.setAttribute("style", " text-align: left; padding: 8px;min-width 75px;");
  tdItem.textContent = item;
  tdAmount.textContent = amount;
  table.append(tr);
  tr.append(tdItem, tdAmount);
  console.log(item.itemVal);
}
