const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: process.env.JWT_EXPIRATION || "24h",
  jwtSecret: process.env.JWT_SECRET_KEY || "jwtSecret",
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
