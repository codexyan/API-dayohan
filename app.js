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
const routerOrganizers = require("./app/api/v1/organizers/router");
const routerAuthCMS = require("./app/api/v1/auth/router");
const routerOrders = require("./app/api/v1/orders/router");
const routerParticipants = require("./app/api/v1/participants/router");
const routerPayments = require("./app/api/v1/payments/router");

// !-- middlewares --!
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddlware = require("./app/middlewares/handler-error");
// !-- End middlewares --!

// membuat variabel v1
const v1 = "/api/v1";

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Selamat datang di aplikasi Dayohan 🚀!",
  });
});

app.use(`${v1}/cms`, routerCategories);
app.use(`${v1}/cms`, routerImages);
app.use(`${v1}/cms`, routerTalents);
app.use(`${v1}/cms`, routerEvents);
app.use(`${v1}/cms`, routerOrganizers);
app.use(`${v1}/cms`, routerAuthCMS);
app.use(`${v1}/cms`, routerOrders);
app.use(`${v1}/cms`, routerPayments);
app.use(`${v1}`, routerParticipants);

// gunakan middlewarenya
app.use(notFoundMiddleware);
app.use(handleErrorMiddlware);

module.exports = app;
