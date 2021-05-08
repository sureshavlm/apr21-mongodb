const chalk = require('chalk');
const mongoose = require('mongoose');
const dbURL = "mongodb://localhost:27017/apr21";

mongoose.connect(dbURL, { useNewUrlParser: true } ); //connected to MongoDB

mongoose.connection.on('connected', () => {
	console.log(chalk.green('Connected to MongoDB!'));
});

mongoose.connection.on('error', () => {
	console.log(chalk.red('Error while connecting to MongoDB!'));
});

mongoose.connection.on('disconnected', () => {
	console.log(chalk.yellow('DB connection disconnected!'));
});
