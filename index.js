require('dotenv').config(); //initialize dotenv
var fs = require('fs');
 
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content == 'ping') {
        
        fs.readFile('text.txt', 'utf8', function(err, data) {
            msg.reply(data);
        });
        
    }
});

//make sure this line is the last line
client.login('OTMzNzExNDIwMDMyNDQ2NDg1.Yelghg.v6H0g1sDNuLR-Sj6nHo0aw_VA-Q'); //login bot using token