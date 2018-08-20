const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

const fs = require("fs");

client.commands = new Discord.Collection();
fs.readdir("./cmd/", (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
    let cmdFile = require(`./cmd/${f}`);
    console.log("Loading " + f);
    client.commands.set(cmdFile.help.name, cmdFile);
  })
});

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('with despair',{type : 'PLAYING'});
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
  try {
    let commandFile = require(`./cmd/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    message.channel.send("That is not a valid command.");
    console.log("\x1b[31m%s\x1b[0m","ERROR | " + message + " - " + message.author.username + " - " + message.createdAt);
    console.error(err);
  }
});

client.login(config.token);
