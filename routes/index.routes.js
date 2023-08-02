var express = require("express");
var app = express();

var authRouter = require("./auth.routes");
var usersRouter = require("./users.routes");
var categoriesRouter = require("./categories.routes");
var productsRouter = require("./products.routes");
var ordersRouter = require("./orders.routes");
app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

module.exports = app;
