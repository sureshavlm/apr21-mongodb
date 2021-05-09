const chalk = require('chalk');
const mongoose = require('mongoose');
const dbURL = "mongodb+srv://admin:admin!@cluster0.khoib.mongodb.net/apr21";

//const dbURL = 'mongodb+srv://admin:admin!@cluster0.khoib.mongodb.net/apr21?retryWrites=true&w=majority';

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
