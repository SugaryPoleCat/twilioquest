from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse
import logging

# The stautscallback in pytohin DOESNT require logging, but i saw a tutorial that sues it so why not right?
logging.basicConfig(level=logging.INFO)

app = Flask(__name__)


@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    print(
        f'Incoming message from {request.values.get("From")}: ${request.values.get("Body")}')
    resp = MessagingResponse()
    resp.redirect("/status")
    return str(resp)

# we just need post here.


@app.route("/status", methods=['POST'])
def status_ahoy_reply():
    message_sid = request.values.get('MessageSid', None)
    message_status = request.values.get('MessageStatus', None)
    logging.info('SID: {}, Status: {}'.format(message_sid, message_status))

# The DEF has to reutnr SOMETHING. so we are returning a stauts of 204, while logging the things in logging.
    return ('', 204)


if __name__ == "__main__":
    app.run(port=8767)
