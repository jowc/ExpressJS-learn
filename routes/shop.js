const path = require("path");
const express = require("express");
const Router = express.Router();

const rootDir = require("../utils/path");

Router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

Router.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = Router;
