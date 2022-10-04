const express = require("express");

const app = express();
const userRouter = require("./routes/users");
app.use("/api/users", userRouter);

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});
app.use("/login", (req, res) => {
  // res.cookie("name", "Mahfuz");
  // res.cookie("age", "13");
  res.append("id", "130022");
  res.end();
});
app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});
app.use((req, res) => {
  res.send("<h1>404 not found</h1>");
});

module.exports = app;
