const http = require("http");

const user = {
  firstname: "John",
  lastname: "Doe",
};

const server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end(JSON.stringify(user));
});

server.listen(8080);
