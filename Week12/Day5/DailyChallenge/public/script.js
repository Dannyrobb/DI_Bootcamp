const regForm = document.getElementById("regForm");
const regButton = document.getElementById("regSubmit");
function registerLogger(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  console.log(username, password, email, fname, lname);
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email, fname, lname }),
  })
    .then((res) => res.json())
    .then((ret) => {
      console.log(ret);
    })
    .catch((e) => {
      console.log(e);
    });
  regForm.reset();
}
// regForm.addEventListener("submit", registerLogger);

const logForm = document.getElementById("logForm");
const logButton = document.getElementById("regSubmit");

function loginLogger(event) {
  event.preventDefault();
  const username = document.getElementById("login").value;
  const password = document.getElementById("logPassword").value;
  console.log(username, password);
  fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((ret) => {
      console.log(ret);
    })
    .catch((e) => {
      console.log(e);
    });
  logForm.reset();
}

// logForm.addEventListener("submit", loginLogger);
