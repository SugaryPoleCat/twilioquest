const http = require('http');
const express = require('express');

// Set up our express web application
const PORT = 8767;
const app = express();
app.use(express.urlencoded({ extended: false }));

// Create a route to handle incoming SMS messages
// This is where the magic happens!


// WHEN copying the NGROK link, remember to at the end do /sms to point to THIS route, otherwise it will not work.
app.post('/sms', (request, response) => {
	console.log(
		`Incoming message from ${request.body.From}: ${request.body.Body}`
	);
	// Here, we're writing and returning raw TwiML
	response.type('text/xml');
	response.send(`
		<Response>
			<Message>TwilioQuest rules</Message>
		</Response>
	`);
});

// Create and run an HTTP server which can handle incoming requests
const server = http.createServer(app);
server.listen(PORT, () => {
	console.log(`Express server listening on localhost:${PORT}`);
});