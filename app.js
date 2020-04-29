/* eslint-disable no-unused-vars */
const dotenv = require('dotenv').config();
const config = require('config');
const chalk = require('chalk');
const { checkEnvVars } = require('./helpers/appHelpers');

// Check required environment vars
const { env } = process;

if (checkEnvVars(env) === true) {
	console.log(chalk.bold.red('\nFill in all the variables in the .env file'));
	process.exit(0);
}

// Modules
require('./db')();
require('./bot')();
