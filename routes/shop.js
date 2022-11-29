const path = require("path");

const express = require("express");
const Router = express.Router();

const rootDir = require("../utils/path");

const adminData = require("./admin");

Router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

Router.use("*", (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = Router;
