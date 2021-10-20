from twilio.rest import Client
from decouple import config

ACCOUNT_SID = config('ACCOUNT_SID')
ACCOUNT_TOKEN = config('ACCOUNT_TOKEN')
NUMBER_FROM = config('NUMBER_FROM')
NUMBER_TO = config('NUMBER_TO')

# Your Account Sid and Auth Token from twilio.com/console
client = Client(str(ACCOUNT_SID), str(ACCOUNT_TOKEN))

# line 15 throws error. I wonder if its becasue i use .env? Unable to create record. WhHY
message = client.messages.create(
    from_=str(NUMBER_FROM),
    body='Sent from python',
    to=str(NUMBER_TO))

print(message.sid)
