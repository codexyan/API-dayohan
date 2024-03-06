var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

// import router
const routerCategories = require("./app/api/v1/categories/router");
const routerImages = require("./app/api/v1/images/router");
const routerTalents = require("./app/api/v1/talents/router");
const routerEvents = require("./app/api/v1/events/router");

// !-- middlewares --!
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddlware = require("./app/middlewares/handler-error");
// !-- End middlewares --!

// membuat variabel v1
const v1 = "/api/v1/cms";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Selamat datang di aplikasi Dayohee!",
  });
});

app.use(v1, routerCategories);
app.use(v1, routerImages);
app.use(v1, routerTalents);
app.use(v1, routerEvents);

// gunakan middlewarenya
app.use(notFoundMiddleware);
app.use(handleErrorMiddlware);

module.exports = app;
