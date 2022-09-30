<!-- Back-End documentation -->

Sumon Hossain<br/>
Seconde Step

---

# Node.js part

### Chapter-1

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex rem
harum itaque nostrum repellat culpa, error inventore doloribus voluptates
laboriosam sequi. Corporis et ipsam atque nemo suscipit tenetur est
tempore sit quam, amet hic quia.<p/>  
<i>This is First "README" file</i>

`this is inline`

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
