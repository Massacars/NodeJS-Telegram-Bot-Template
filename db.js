const mongoose = require('mongoose');
const chalk = require('chalk');

// Mongoose connect status colors
const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

// Environment vars
const { NODE_ENV } = process.env;
const { DB_HOST } = process.env;

module.exports = () => {
	// Mongoose connect
	mongoose.connect(
		NODE_ENV === 'production' ? DB_HOST : 'mongodb://localhost:27017/local',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		}
	);

	mongoose.connection.once('connected', () => {
		console.log(connected('Connection established successfully'));
	});

	mongoose.connection.on('error', function (err) {
		console.log(
			error('Mongoose default connection has occured ' + err + ' error')
		);
		process.exit(0);
	});

	mongoose.connection.on('disconnected', function () {
		console.log(disconnected('Mongoose default connection is disconnected'));
	});

	process.on('SIGINT', function () {
		mongoose.connection.close(() => {
			console.log(termination('Bye bye!'));
			process.exit(0);
		});
	});
};
