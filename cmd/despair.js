const config = require("../config.json");

exports.run = (client, message, args) => {
  //if no arg or da, will only pull da quotes
  if (args.length == 0 || args[0] === "da") {
    var quotes = config.da
    console.log("\x1b[32m%s\x1b[0m","!despair (da) - " + message.author.username + " - " + message.createdAt);
  }
  //if rol, will pull da or rol quotes
  else if (args[0] === "rol") {
    var quotes = config.da.concat(config.rol);
    console.log("\x1b[32m%s\x1b[0m","!despair rol - " + message.author.username + " - " + message.createdAt);
  }
  //if exodus, will pull da, rol, or exodus quotes
  else if (args[0] === "exodus") {
    var quotes = config.da.concat(config.rol, config.exodus);
    console.log("\x1b[32m%s\x1b[0m","!despair exodus - " + message.author.username + " - " + message.createdAt);
  }
  else {
    message.channel.send("That is not a valid command.");
    console.log("\x1b[31m%s\x1b[0m","ERROR | " + message + " - " + message.author.username + " - " + message.createdAt);
    return;
  }
  var roll = Math.floor(Math.random() * quotes.length);
  message.channel.send(quotes[roll]);
};

exports.help = {
  name: "despair <da, rol, exodus>",
  description: "Generates a random quote from Fafner.\n{!despair} and {!despair da} will pull quotes from DA only.\n{!despair rol} will pull quotes from DA and RoL.\n{!despair exodus} will pull quotes from DA, RoL, and Exodus."
};
