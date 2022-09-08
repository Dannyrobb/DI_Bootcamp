let body = document.querySelector("body");
let ele = document.createElement("p");
async function getter() {
  let fromServer = await fetch("http://localhost:3000/user");
  return fromServer;
}

getter()
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    let stringRes = JSON.stringify(response);
    body.textContent = stringRes;
  });

//   five hours later..... Thanks Adane!!
