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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // gestionando error de validación
  if (err.array) {
    // error de validación
    err.status = 422;
    const errInfo = err.array({ onlyFirstError: true })[0];
    err.message = `(${errInfo.location}) ${errInfo.param} ${errInfo.msg}`;
  }

  res.status(err.status || 500);

  // si es un error en el API respondo JSON
  if (isAPIRequest(req)) {
    res.json({ error: err.message });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.render("error");
});

module.exports = app;

app.listen(3000, function () {
  console.log("Server iniciado en el puerto 3000");
});
