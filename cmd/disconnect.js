const config = require("../config.json");

exports.run = (client, message, args = []) => {
  console.log("\x1b[32m%s\x1b[0m","!disconnect - " + message.author.username + " - " + message.createdAt);
  if (message.author.id === config.ownerID){
    client.destroy();
  }
  else {
    message.channel.send("You do not have permission to do this.");
  }
};

exports.help = {
  name: "disconnect",
  description: "Disconnects bot from Discord."
};
