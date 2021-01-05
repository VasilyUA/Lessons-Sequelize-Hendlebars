const Sequelize = require('sequelize');
const db = require('../database/sequelize');

const todo = db.define('todo', {
	title: {
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.STRING,
	},
});

module.exports = todo;
