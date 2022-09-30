const http = require("http"),
  port = 5000,
  hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("<h1>Hi, I'm your first server</h1>");
});

myServer.listen(port, hostName, () => {
  console.log(`Your server is running at http://${hostName}:${port}`);
});
