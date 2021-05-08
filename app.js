
const express = require('express');
const path = require('path');

const userRouter = require('./routes/user');
const employeeRouter = require('./routes/employee');

var db = require('./db');//when the app starts db connection establishes

const app = express();

const port = process.env.PORT || 8080;

/* telling the compiler to look for views folder for ejs */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json()); //all requests gets parsed as json
app.use(express.urlencoded({ extended : false }));

app.listen(port, () => {
	console.log('Server listening on port ', port);
});

/* http://localhost:8080/ */
app.get('/', (req, res) => {
	res.render('login', { title: 'Sign-In', version: '1.0.0'});
});

/* http://localhost:8080/user/*** */
app.use('/user', userRouter);

app.use('/employee', employeeRouter);

