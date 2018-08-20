exports.run = (client, message, args) => {
  console.log("\x1b[32m%s\x1b[0m","!help - " + message.author.username + " - " + message.createdAt);
  let help = "```css";
  help += "\nPlease ignore all brackets when you use a command.\n";
  client.commands.forEach(command => {
    help += `\n[!${command.help.name}]`;
    help += `\n${command.help.description}\n`;
  });
  help += "```";
  message.channel.send(help);
};

exports.help = {
  name: "help",
  description: "Lists all available commands and what they do.",
  usage: "help"
};
