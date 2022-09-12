const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});
let shopping = [];

app.post("/shoppinglist", (req, res) => {
  shopping.push(req.body);
  console.log(shopping);
  res.json(shopping);
});
app.listen(3000);
