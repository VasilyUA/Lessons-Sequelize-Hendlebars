const dotenv = require("dotenv");
const path = require("path");

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root(".env") });
module.exports = {
  DATA_BASE_NAME: process.env.DATA_BASE_NAME,
  USER_DB: process.env.USER_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,
  HOST_DB: process.env.HOST_DB,

  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
