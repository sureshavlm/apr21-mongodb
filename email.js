const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '';

sgMail.setApiKey(sendgridAPIKey);

module.exports.sendEmail = function(_toEmail, _subject, _body, callback) {
	sgMail.send({
	    to: _toEmail,
	    from: 'clswarooppp@gmail.com',
	    subject: _subject,
	    text: _body
	}, function() {
		callback();
	})
}