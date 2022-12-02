const pathfl = require("path");

const express = require("express");
const Router = express.Router();

const rootDir = require("../utils/path");

const ctrl = require("../controllers/products");

Router.get("/", ctrl.getProducts);

Router.use("*", (req, res, next) => {
  res.status(404).sendFile(pathfl.join(rootDir, "views", "404.html"));
});

module.exports = Router;
