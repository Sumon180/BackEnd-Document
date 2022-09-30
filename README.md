# BackEnd-Document
Backend Document
<!-- Back-End documentation -->

Sumon Hossain<br/>
Seconde Step

---

# Node.js part

### Chapter-1
Module<br/>
```javascript
const { getName } = require("./student");
console.log(getName());
```
```javascript
exports.getName = () => {
  return "Sumon Hossain";
};

const age = () => {
  return "25";
};

const cgpa = 3.94;

// exports.getName = getName;
// exports.agee = age;
// exports.Cgpa = cgpa;

// Or

module.exports = {
  age,
  cgpa,
};
```
### Chapter-2
Built in Module<br/>
```javascript
const fs = require("fs");

fs.writeFile(
  "demo.txt",
  "This is sample text , My Name is Sumon hoassin",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Succesful");
    }
  }
);
```
```javascript
const fs = require("fs");
fs.appendFile("demo.txt", " & age 25 ", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesful");
  }
});
```
```javascript
const fs = require("fs");
fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```
```javascript
const fs = require("fs");
fs.rename("demo.txt", "demo2.text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("succesfull");
  }
});
```
```javascript
const fs = require("fs");
fs.unlink("demo2.text", (err) => {
  //for delete
  if (err) {
    console.log(err);
  } else {
    console.log("succesfull");
  }
});
```
```javascript
const fs = require("fs");
fs.exists("demo2.text", (result) => {
  //for delete
  if (result) {
    console.log("Found");
  } else {
    console.log("not found");
  }
});
```
```javascript
fs.existsSync("demo2.text");
```
### Chapter-3
First Server<br/>
```javascrip
const http = require("http"),
  port = 5000,
  hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("<h1>Hi, I'm your first server</h1>");
});

myServer.listen(port, hostName, () => {
  console.log(`Your server is running at http://${hostName}:${port}`);
});

```
### Chapter-4
First Server<br/>
```javascrip
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
```
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex rem
harum itaque nostrum repellat culpa, error inventore doloribus voluptates.<p/>  
<i>This is First "README" file</i>

`this is inline`
### Chapter-6
First Server<br/>
```javascript
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
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <h1>Home Page</h1>
  </body>
</html>
```

```css
.header {
  background: green;
  color: #fff;
}
```

#### Order list

1. item-1
2. item-2
   1. subitem
   2. subitem
   3. subitem
3. item-3
4. item-4
5. item-5

#### UnOrder list

- item-1
- item-2
  - item-1
  - item-2
- item-3
- item-4

#### Task list

- [x] task1
- [x] task2
- [x] task3
- [x] task4

#### auto link

http://www.google.com

#### desable link

`http://www.google.com`

#### markdoun link syntex

[Go to Google](http://www.google.com)

http://www.google.com

#### image

<!-- ![profile](profile.jpg) -->

<img src="profile.jpg"/>

#### Table

| Name  | Email   |
| ----- | ------- |
| Sumon | Hossain |
| Sumon | Hossain |
| Sumon | Hossain |
