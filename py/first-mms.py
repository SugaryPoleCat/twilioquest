from twilio.rest import Client
from decouple import config

ACCOUNT_SID = config('ACCOUNT_SID')
ACCOUNT_TOKEN = config('ACCOUNT_TOKEN')
NUMBER_FROM = config('NUMBER_FROM')
NUMBER_TO = config('NUMBER_TO')
# your account sid and auth token from twilio.com/console
account_sid = ACCOUNT_SID
auth_token = ACCOUNT_TOKEN
client = Client(account_sid, auth_token)

message = client.messages.create(
    media_url="https://api.assistivecards.com/cards/shapes/heart@2x.png",
    body="This is a heart.",
    from_=NUMBER_FROM,
    to=NUMBER_TO
)

print(message.sid)
