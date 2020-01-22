/* eslint-disable no-unused-vars */
const dotenv = require('dotenv').config();
const config = require('config');
const mongoose = require('mongoose');
const chalk = require('chalk');

// Environment vars
const env = process.env;

// Mongoose connect status colors
const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

// Mongoose connect
mongoose.connect(env.DB_CONNECT_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

mongoose.connection.once('connected', () => {
	console.log(connected('Connection established successfully'));
	require('./bot')();
});

mongoose.connection.on('error', function(err) {
	console.log(
		error('Mongoose default connection has occured ' + err + ' error')
	);
});

mongoose.connection.on('disconnected', function() {
	console.log(disconnected('Mongoose default connection is disconnected'));
});

process.on('SIGINT', function() {
	mongoose.connection.close(() => {
		console.log(termination('Bye bye!'));
		process.exit(0);
	});
});
