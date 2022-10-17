const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 3001;
app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/world", (req, res) => {
  console.log(req.body.post);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
