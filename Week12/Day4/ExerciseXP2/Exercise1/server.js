const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/user", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  res.json(user);
  res.end(console.log(user));
});

app.listen(3000, () => {});
