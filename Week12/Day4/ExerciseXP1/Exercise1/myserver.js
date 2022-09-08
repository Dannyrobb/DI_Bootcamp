const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("<h1>first</h1><h2>second</h2><h3>third</h3>");
});
server.listen(3000);
