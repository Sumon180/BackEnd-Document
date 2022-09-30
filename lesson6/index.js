const fstat = require("fs");
const http = require("http");

const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handlReadFile = (statusCode, fileLocation) => {
    fstat.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handlReadFile(200, "./views/index.html");
  } else if (req.url === "/about") {
    handlReadFile(200, "./views/about.html");
  } else if (req.url === "/contact") {
    handlReadFile(200, "./views/contact.html");
  } else {
    handlReadFile(200, "./views/error.html");
  }
});
server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
