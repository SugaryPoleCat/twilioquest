const twilio = require('twilio');

// authentication Api
const client = twilio(
	// I liek to make sure things are the right type.
	String(process.env.ACCOUNT_SID),
	String(process.env.ACCOUNT_TOKEN)
);

client.messages
	.create({
		from: String(process.env.NUMBER_FROM),
		to: String(process.env.NUMBER_TO),
		// Input the "to" number here
		// What is the mediaUrl that you want to send in your message?
		// Why don't you add a body parameter too?
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
