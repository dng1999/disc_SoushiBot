exports.run = (client, message, args = []) => {
  message.channel.send("Ping? Pong!~");
  console.log("\x1b[32m%s\x1b[0m","!ping - " + message.author.username + " - " + message.createdAt);
};

exports.help = {
  name: "ping",
  description: "Ping/Pong command. Used to test if bot is working."
};
