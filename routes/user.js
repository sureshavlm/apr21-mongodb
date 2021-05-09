
const express = require('express'); //importing a express mvc 
var User = require('../model/user');
const router = express.Router(); //creating sub-routes

const email = require('../email');

/* http://localhost:8080/user/login */
router.post('/login', (req, res) => {
	User.findOne({ 
		username: req.body.username
		}, (err, db) => {
		if(err)
			throw err;
		else if(db == null){
			res.json({ message: "Username or Password invalid!", status: 401 });
		}
		else if(db.password != req.body.password){
			res.json({ message: "Username or Password invalid!", status: 401 });
		}
		else {
			res.json(db);
		}
	});

});

router.get('/register', (req, res) => {
	res.render('register');
});

router.post('/register', (req, res) => {
	let userModel = new User();
	userModel.username = req.body.username;
	userModel.password = req.body.password;
	userModel.email = req.body.email;

	userModel.save(function(err, result) {
		if(err){
			console.log(' *** New user created ****');
			throw error;
		}
		else {
			email.sendEmail(result.email, 
				'Welcome! '+ result.username, 
				`<h1>Successfully Register with Amazon</h1>
				<div>We are plased to inform you that user account created successfully.</div>
				<a href="google.com">Verify Email</a>`);
			console.log(' *** New user created and record is: ****', result);
			
			res.render('home');
		}
	});

});

module.exports = router;