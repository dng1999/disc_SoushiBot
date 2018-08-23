exports.run = (client, message, args) => {
  console.log("\x1b[32m%s\x1b[0m","!happy - " + message.author.username + " - " + message.createdAt);
  message.channel.send("Happiness doesn't exist.");
};

exports.help = {
  name: "happy",
  description: "Generates a line about happiness."
};
