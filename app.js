//dependencies
const express = require("express");

const app = express();

app.use("/express", (req, res, next) => {
  res.send("<h1>Welcome to Express JS</h1>");
});

app.use("/hi", (req, res, next) => {
  res.send("<h1>Welcome to NodeJs/Express</h1>");
});

app.use("/", (req, res, next) => {
  res.send("learning NodeJS and Express");
});

const port = 3000;

app.listen(port);
