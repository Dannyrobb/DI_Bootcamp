const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/aboutMe/:hobby", (req, res) => {
  if (/^[A-Za-z]+$/.test(req.params.hobby)) {
    res.writeHead(200);
    res.end(req.params.hobby);
  } else {
    res.writeHead(404);
    res.end("Sorry, only strings!!!");
  }
});

app.get("/pic", (req, res) => {
  res.sendFile(__dirname + "/public/htmlwithpic.html");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/formdata", (req, res) => {
  res.send(`You got a message from ${req.body.email} saying:"${req.body.message}"`);
});

app.listen(3000);
