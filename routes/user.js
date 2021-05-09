
const express = require('express'); //importing a express mvc 
var User = require('../model/user');
const router = express.Router(); //creating sub-routes

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

router.get('/logout', (req, res) => {

});

module.exports = router;