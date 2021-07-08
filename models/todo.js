const Sequelize = require('sequelize');
const db = require('../database/sequelize');

const todo = db.define('todo', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	finish: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
});

module.exports = todo;
