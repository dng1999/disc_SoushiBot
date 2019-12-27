exports.run = (client, message, args) => {
  console.log("\x1b[32m%s\x1b[0m","!holiday - " + message.author.username + " - " + message.createdAt);

  var quotes = ["Happy holidays!",
                "||-delighted noises-|| (EXODUS spoilers)",
                "||baba! -giggles-|| (EXODUS spoilers)",
                "You will soon learn that holidays will only remind you of those who are gone.",
                "I hope you have a warm place to return to for the holidays."
              ];
  var roll = Math.floor(Math.random() * quotes.length);
  message.channel.send(quotes[roll]);
};

exports.help = {
  name: "holiday",
  description: "Wishes you well."
};
