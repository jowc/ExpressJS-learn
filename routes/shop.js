const path = require("path");

const express = require("express");
const Router = express.Router();

const rootDir = require("../utils/path");

const products = require("./admin");

Router.get("/", (req, res, next) => {
  console.log("shop.js: ", products.products);
  const context = { prods: products.products, title: "Shop" };
  // res.sendFile(path.join(rootDir, "views", "shop.html")
  res.render("shop", context);
});

Router.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = Router;
