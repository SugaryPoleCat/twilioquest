exports.handler = function (context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
	twiml.say('This is it');
	if (event.From.startsWith('+1888')) {
		twiml.say('And this is not it');
	}
	callback(null, twiml);
};

// When createing the function for this, make sure to go to the FUNCTIOSN>CLASSIC>LIST and create using BLANK.