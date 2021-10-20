const http = require('http');
const express = require('express');
const { urlencoded } = require('body-parser');

const PORT = 8767;
const app = express();
app.use(urlencoded({ extended: false }));

app.post('/sms', (request, response) => {
	console.log(
		`Incoming message from ${request.body.From}: ${request.body.Body}`
	);
	response.type('text/xml');
	// instead of use <Message> we use <Redirect> to redirect to our app.post(/redirect)
	// which then will send the message.
	response.send(`
    <Response>
      <Redirect>/redirect</Redirect>
    </Response>
  `);
});

app.post('/redirect', (request, response) => {
	console.log('Redirect request received! Responding...');
	response.type('text/xml');
	response.send(`
    <Response>
      <Message>Hi there! I am TwiML from a Redirect.</Message>
    </Response>
  `);
});

const server = http.createServer(app);
server.listen(PORT, () =>
	console.log(`Express server listening on localhost:${PORT}`)
);
