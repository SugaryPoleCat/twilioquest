from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)


@app.route("/sms", methods=['GET', 'POST'])
def sms_ahoy_reply():
    print(
        f'Incoming message from {request.values.get("From")}: ${request.values.get("Body")}')
    resp = MessagingResponse()
    resp.redirect("/redirect")
    return str(resp)


@app.route("/redirect", methods=['GET', 'POST'])
def redirect_ahoy_reply():
    print(
        f'Incoming message from {request.values.get("From")}: ${request.values.get("Body")}')
    resp = MessagingResponse()
    resp.message("This is redirect")
    return str(resp)


if __name__ == "__main__":
    app.run(port=8767)
