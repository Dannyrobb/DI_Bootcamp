const shoppingForm = document.getElementById("shoppingForm");
const submitBtn = document.getElementById("submit");
function addToShoppingList(event) {
  event.preventDefault();
  const item = document.getElementById("item").value;
  const price = document.getElementById("price").value;
  console.log(item, price);
  fetch("/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item, price }),
  })
    .then((res) => res.json())
    .then((ret) => {
      console.log(ret);
    })
    .catch((e) => {
      console.log(e);
    });
  shoppingForm.reset();
}

function fetcher() {
  fetch("/items", { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((res) => console.log(res));
}
