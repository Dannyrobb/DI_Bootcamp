const express = require("express");
const app = express();

app.get("/:id", (req, res) => {
  res.send(req.params);
  console.log(req.params);
  res.end();
});
app.listen(3000, () => {});
