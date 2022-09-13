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

let items = [];
app.post("/items", (req, res) => {
  console.log(req.body);
  const f = fs.readFileSync("./items");
  items = JSON.parse(f.toString()) || [];
  const index = items.findIndex((item) => item.item == req.body.item);
  if (index === -1) {
    items.push(req.body);
    fs.writeFile("./items", JSON.stringify(items), (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.status(200).json({ msg: "ok", item: req.body.item });
  } else {
    res.status(201).json({ msg: "item already exists", item: req.body.email });
  }
});

app.get("/items", (req, res) => {
  console.log(req.body);
  const f = fs.readFileSync("./items");
  const parsedFile = JSON.parse(f.toString()) || [];
  res.send(parsedFile);
});

app.get("/items/:id", (req, res) => {
  console.log(req.body);
  const f = fs.readFileSync("./items");
  const parsedFile = JSON.parse(f.toString()) || [];
  res.send(parsedFile[req.params.id]);
});
