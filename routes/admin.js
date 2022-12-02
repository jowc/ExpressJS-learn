const express = require("express");
const parser = require("body-parser");

const ctrl = require("../controllers/products");

const Router = express.Router();

Router.use(parser.urlencoded({ extended: true }));

Router.get("/add-product", ctrl.productForm);

Router.post("/add-product", ctrl.productPost);

exports.routes = Router;
