# twilioquest

## introduction
look at .env.example and copy paste it and save it as .env file in root (in /twilioquest)

Then rename it as .env and edit the variables after the '=' to your account SID and token and number and the number you wish to send and call to.

NUMBER_FROM = the numebr you want to send from. This can be any number you Twilio ACcount token/SID has access to.

NUMBER_TO = The number you wish to use. Always start with +, because different countries have different codes.



We do this to protect sensitive data when using such things like git.
We save a .env.example or template so we can recreate it , or we create a code snippet that will generate it for us that we later fill in, but for such projects copy/paste is enough.


You will need to unzip the ngrok for your OS, because it is required for webhooks.
https://ngrok.com/download


# First step
First make sure you open console in VS code (CTRL + `)

Use `pwd` command to checek where you are. If you are not in `YOURFOLDERS/twilioquest` make sure to do `cd twilioquest`.

Now you should be inside the twilioquest folder. Running applications from here, lets us use just one .env file.

If we would run the commands from for example '/twilioquest/js' folder, if we then put .env in /twilioquest folder, teh programs would not work.

You need to start the application from where the .env file is located, because im lazy to set it up in the code.

So for example: `nodemon js/sms/send-text` will launch that from root, with .env active


# IF PYTHON:
## introduction
Run `sudo pip install python-decouple` and `sudo pip install twilio` or `sudo pip install twilio pything-decouople`

Run `pip install python-decouple` and `pip install twilio` or `pip install twilio pything-decouople` if on windows

Run commands using: `py folder/command.py` where folder is the folder you want to acccess (sms, voice) and command is the name of the file.


# IF NODE
Run `sudo npm i` to install all dependencies.

Run `npm i` if on windows.

You dont have to do `npm i twilio dotenv` etc, becasue node saves package.json, all modules are saved there so all you have to do is npm i.

Run programs using `nodemon folder/command` where folder is the folder you want to acccess (sms, voice) and command is the name of the file.