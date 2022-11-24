const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to Node with ExpressJs");
  res.end();
});

const port = 3000";

server.listen(port);
