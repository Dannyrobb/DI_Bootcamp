//part1
const main = require("./main");
const b = 5;
console.log(main.largeNumber + b);

//part2
const http = require("http");
const server = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "text/html");
  console.log("I'm listening");
  res.end(`<p>My module is:</p> <p>${largeNumber + b}</p> <h1> Hi there at the frontend</h1>`);
});
server.listen(3000);

//part3
const http2 = require("http");
const server2 = http2.createServer(function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(`<p>The date and time are currently ${main.dater}</p>`);
});
server2.listen(8080);
console.log(main.dater);
