const path = require("path");

const express = require("express");
const parser = require("body-parser");

const rootDir = require("../utils/path");

const Router = express.Router();

Router.use(parser.urlencoded({ extended: true }));

Router.get("/add-product", (req, res, next) => {
  //   console.log(rootDir);
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

Router.post("/add-product", (req, res, next) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});

module.exports = Router;
