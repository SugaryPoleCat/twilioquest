const twilio = require('twilio');
require('dotenv').config();

// authentication Api
const client = twilio(
	process.env.ACCOUNT_SID,
	process.env.ACCOUNT_TOKEN
);

client.messages
	.create({
		from: process.env.NUMBER_FROM,
		to: process.env.NUMBER_TO,
		mediaUrl: "https://api.assistivecards.com/cards/shapes/heart@2x.png",
		body: 'This is a heart.'
	})
	.then(message => {
		console.log(
			'Copy this MMS SID. How does it look different from an SMS SID?'
		);
		console.log(`${message.sid}`);
	})
	.catch(error => {
		console.error('Looks like the Twilio API returned an error:');
		console.error(error);
	});
