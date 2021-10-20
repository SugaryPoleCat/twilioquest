const http = require('http');
const express = require('express');

const PORT = 8767;
const app = express();
app.use(express.urlencoded({ extended: false }));

app.post('/sms', (request, response) => {
	console.log(
		`Incoming message from ${request.body.From}: ${request.body.Body}`
	);
	response.type('text/xml');
	// adding the Action attribute and pointing it to relative /status link
	// will do /status route under the hood when the message is sent. 
	response.send(`
    <Response>
		<Message action="/status">
			This is my reply
		</Message>
	</Response>
	`);
});

app.post('/status', request => {
	console.log('Status update received');
	console.log('Message status: ', request.body.MessageStatus);
	console.log('Message SID: ', request.body.MessageSid);
});

const server = http.createServer(app);
server.listen(PORT, () =>
	console.log(`Express server listening on localhost:${PORT}`)
);
