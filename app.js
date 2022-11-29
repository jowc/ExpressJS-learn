//dependencies
const path = require("path");

const express = require("express");

const adminRoutes = require("./routes/admin");
const routes = require("./routes/shop");

const app = express();
const port = 3000;

app.listen(port);

const static = express.static(path.join(__dirname, "public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(static);

app.use("/admin", adminRoutes.routes);
app.use(routes);
