const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
app.use(cors());

app.use("/", express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("listening on port 3000");
});

let users = [];
app.post("/register", (req, res) => {
  console.log(req.body);
  const f = fs.readFileSync("./users");
  users = JSON.parse(f.toString()) || [];
  const index = users.findIndex((item) => item.email == req.body.email);
  if (index === -1) {
    users.push(req.body);
    fs.writeFile("./users", JSON.stringify(users), (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ msg: "ok", email: req.body.email });
  } else {
    res.status(201).json({ msg: "email already exists", email: req.body.email });
  }
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const f = fs.readFileSync("./users");
  users = JSON.parse(f.toString()) || [];
  const user = users.find((item) => item.username == req.body.username);
  if (user) {
    if (req.body.password === user.password) {
      res.status(200).json({ msg: "welcome back", username: req.body.username });
    } else {
      res.status(404).json({ msg: "wrong password" });
    }
  } else {
    res.status(404).json({ msg: "wrong username" });
  }
});
