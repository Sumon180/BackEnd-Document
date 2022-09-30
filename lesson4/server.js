const http = require("http"),
  port = 3000,
  hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write("<h1>I'm Server</h1>");
  res.write("<h2>I'm Server</h2>");
  res.end();
});

myServer.listen(port, hostName, () => {
  console.log(`Your server is running at http://${hostName}:${port}`);
});
