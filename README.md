# twilioquest

look at .env.example and copy paste it into /js or /py folder.

Then rename it as .env and edit the variables after the '=' to your account SID and token and number and the number you wish to send and call to.

NUMBER_FROM = the numebr you want to send from. This can be any number you Twilio ACcount token/SID has access to.

NUMBER_TO = The number you wish to use. Always start with +, because different countries have different codes.



We do this to protect sensitive data when using such things like git.
We save a .env.example or template so we can recreate it , or we create a code snippet that will generate it for us that we later fill in, but for such projects copy/paste is enough.


You will need to unzip the ngrok for your OS, because it is required for webhooks.
https://ngrok.com/download

# IF PYTHON:
Run `sudo pip install python-decouple` and `sudo pip install twilio` or `sudo pip install twilio pything-decouople`

Run `pip install python-decouple` and `pip install twilio` or `pip install twilio pything-decouople` if on windows

Run commands using: `py \*/\*.py`


# IF NODE
Run `sudo npm i` to install all dependencies.

Run `npm i` if on windows.

You dont have to do `npm i twilio dotenv` etc, becasue node saves package.json, all modules are saved there so all you have to do is npm i.

Run programs using `node \*/\*`

Or use `nodemon \*/\*`. NOdemon will automatically restart your program when you save changes.