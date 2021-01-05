const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('.env') });
module.exports = {
	PORT: process.env.PORT,
	DATA_BASE: process.env.DATA_BASE,
	ADMIN: process.env.ADMIN,
	PASSWORD_ADMIN: process.env.PASSWORD_ADMIN,
	HOST: process.env.HOST,
	NODE_ENV: process.env.NODE_ENV,
};
