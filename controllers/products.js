const path = require("path");

const rootDir = require("../utils/path");

const products = [];

exports.productForm = (req, res, next) => {
  //   console.log(rootDir);
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.productPost = (req, res, next) => {
  const body = req.body;
  products.push(body);
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //   const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
