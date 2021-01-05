const Sequelize = require('sequelize');
const { DATA_BASE, ADMIN, PASSWORD_ADMIN, HOST } = require('../config');
module.exports = new Sequelize(DATA_BASE, ADMIN, PASSWORD_ADMIN, {
	host: HOST,
	dialect: 'mysql',
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
