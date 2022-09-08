const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.writeHead(200);
  res.end("<p>this is a html tag<p>");
});
app.listen(3000);
