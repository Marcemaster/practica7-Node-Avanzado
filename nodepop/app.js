var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var anunciosRouter = require("./routes/api/anuncios");
var indexRouter = require("./routes/index");

var app = express();
require("./lib/connectMongoose");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.locals.title = "Nodepop";

/**
 * Middlewares de nuestra aplicación
 * Los evalua Express ante cada petición que recibe
 */
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/**
 * Rutas de mi API
 */

app.use("/api/anuncios", anunciosRouter);
app.use("/api/tags", anunciosRouter);

/**
 * Rutas de mi website
 */
app.use("/", indexRouter);

module.exports = app;

app.listen(3000, function () {
    console.log("Server iniciado en el puerto 3000");
});
