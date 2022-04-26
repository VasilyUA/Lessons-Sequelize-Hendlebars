const Sequelize = require("sequelize");
const { DATA_BASE_NAME, USER_DB, PASSWORD_DB, HOST_DB } = require("../config");
module.exports = new Sequelize(DATA_BASE_NAME, USER_DB, PASSWORD_DB, {
  host: HOST_DB,
  port: 3307,
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: true,
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
