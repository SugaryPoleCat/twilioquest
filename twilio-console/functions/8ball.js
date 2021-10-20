// START
exports.handler = function (context, event, callback) {
	let twiml = new Twilio.twiml.MessagingResponse();
	twiml.message("Hello World");
	callback(null, twiml);
};

// FOR THE QUEST
// CAN USE GIT FOR THIS BUT, WHATEVER
/**
 * @version 1.0
 */
const responseMessage = 'This is my SMS response.';
exports.handler = function (context, event, callback) {
	const twiml = `
		<?xml version=1.0 encoding="UTF-8"?>
		<Response>
			<Message>${responseMessage}</Message>
		</Response>`;

	const response = new Twilio.Response();
	response.setBody(twiml).appendHeader('content-type', 'text/xml');
	callback(null, response);
};

/**
 * @version 2.0
 * now with actual answers, as per tutorial
 */
exports.handler = function (context, event, callback) {
	let answers = [
		'It is certain.',
		'As I see it, yes.',
		'Without a doubt.',
		'Yes - definitely.',
		'Outlook good.',
		'Most likely.',
		'Reply hazy, try again.',
		'Ask again later.',
		'Better not tell you now.',
		"Don't count on it.",
		'My reply is no.',
		'My sources say no.',
		'Very doubtful.',
		'Outlook not so good.'
	];

	//   you can either do as tutorial says, but we can also just do the math without first
	// initialising variable, by doing the -- math inside the actual reply.
	// the power of JS.
	// wont work in actual programming codes, like C#, or Python.
	// Why is it answers[Math.floor(Math.random() * answers.length)]?
	// Because we are trying to get a random answer from our array.
	// Math.floor, forces JS to use lowest possible number without decimals.
	// JS by default works in float numbers, so this forces it to NOT do that.
	// Math.random() * answers.length is self-explanatory. It randomises a number based on the length of array, that way each answer has a possibility to be chosen. 
	// Except that this usually doesnt include the last and first numbers, to do that you need to modify this into:
	// Math.random() * (max - min + 1) + min;

	// So in JS you can instantly loop through an array quickly to get a response from it, by using array[themath].
	const twiml = `
		<?xml version=1.0 encoding="UTF-8"?>
		<Response>
			<Message>${answers[Math.floor(Math.random() * answers.length)]}</Message>
		</Response>`;

	const response = new Twilio.Response();
	response.setBody(twiml).appendHeader('content-type', 'text/xml');
	callback(null, response);
};

/**
 * @version 3.0
 * using the Twilio node.js client to abstract the <response> etc for us.
 */
exports.handler = function (context, event, callback) {
	let answers = [
		'It is certain.',
		'As I see it, yes.',
		'Without a doubt.',
		'Yes - definitely.',
		'Outlook good.',
		'Most likely.',
		'Reply hazy, try again.',
		'Ask again later.',
		'Better not tell you now.',
		"Don't count on it.",
		'My reply is no.',
		'My sources say no.',
		'Very doubtful.',
		'Outlook not so good.'
	];

	const response = new Twilio.twiml.MessagingResponse();
	response.message(answers[Math.floor(Math.random() * answers.length)]);
	callback(null, response);
};