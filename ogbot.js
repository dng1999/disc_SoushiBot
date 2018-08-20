const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on("message", (message) => {
  //Ignore any messages written by bots
  if(message.author.bot) return;

  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix)) return;

  //Grab arguments from message
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  //Grab command from message
  const command = args.shift().toLowerCase();

  //test if bot is functioning using ping
  if (command === "ping") {
    message.channel.send("pong!");
    console.log("!ping - " + message.author.username + " - " + message.createdAt);
  }
  //disconnect bot
  if (command === "disconnect") {
    if (message.author.id === config.ownerID){
      client.destroy();
    }
    else {
      message.channel.send("You do not have permission to do this.");
    }
  }
  //pulls random quotes from Soushi's monologues
  else if (command === "despair") {
    //if no arg or da, will only pull da quotes
    if (args.length == 0 || args[0] === "da") {
      var quotes = config.da
      console.log("!despair (da) - " + message.author.username + " - " + message.createdAt);
    }
    //if rol, will pull da or rol quotes
    else if (args[0] === "rol") {
      var quotes = config.da.concat(config.rol);
      console.log("!despair rol - " + message.author.username + " - " + message.createdAt);
    }
    //if exodus, will pull da, rol, or exodus quotes
    else if (args[0] === "exodus") {
      var quotes = config.da.concat(config.rol, config.exodus);
      console.log("!despair exodus - " + message.author.username + " - " + message.createdAt);
    }
    var roll = Math.floor(Math.random() * quotes.length);
    message.channel.send(quotes[roll]);
  }
});

client.login(config.token);
