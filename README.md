# LHOHQ WEBHOME PARSER
A discord bot that automatically posts the newest post from the lhohq online webhome to a designated channel continuously.
Note: To run this bot you need the latest version of node.js installed on your machine.

## Setup
After you have cloned this repo to your desired location, create a file simply called `.env` in the folder. open that file with your favorite text editor, 
and write:
```
token=yourtokenhere
```
Replace 'yourtokenhere' with the discord token of your bot account. If you don't know how to set up a discord bot account, follow [this guide.](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

Now open up a new powershell instance, cd to the main folder of the bot (the one where index.js is sitting in) and type `npm install`. Now wait untill everything is installed. 

To start the bot type `node .` and press enter.
After a few seconds it should output `Online.` in the console.

## Usage
After inviting the bot to your discord server, make sure it has all the permissions to send messages in the channel where it will post the lhohq posts and read messages in the channel where you activate the bot.
Now copy the ID of the channel where you want the bot to post messages, and send the following message:
```
lhohq-start-stream channelidhere
```
Replace 'channelidhere' with the copied channel ID obviously. After a few seconds the bot should send the most recent post from the lhohq webhome forum into the channel and continuously do so whenever a new entry is posted into the forum. All done!
