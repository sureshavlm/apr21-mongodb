const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username : { type : String, unique: true },
	password : { type : String },
	createdDate : { type: Date, default: new Date() }
});

/* created a schema and mapped with collection/table called user
	nodeJS javaScript object mapped with table
*/

module.exports = mongoose.model('user', userSchema);