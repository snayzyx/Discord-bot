# First lets import the lib
import discord

## Becarful with this var (you have to keep the token private)
Token = "PUT_TOKEN_HERE"


# Then Chose the Intents (if you don't know, gocheck doc)
intents = discord.Intents.default() # variable to set itents to the default discord itents
intents.message_content = True # acces to message content

client = discord.client(intents=intents) # setting a variable for the client

# On_ready Event
@client.event
async def on_ready(): # function at bot startup 
    print(f'Logged as {client.user}') # message sending in console 


@client.event
async def on_message(message): # checking for a message 
    if message.author == client.user: # check if message author is not the bot
        return # = nil return 



client.run(Token)