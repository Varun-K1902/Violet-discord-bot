const Discord = module.require("discord.js");
const usedCommandRecently = new Map();
const Duration = require('humanize-duration');

module.exports.run = async (bot, message, args) => {
  const cooldown = usedCommandRecently.get(message.author.id);
  if(cooldown){
      const remaining = Duration(cooldown - Date.now(), { units: ['s'], round: true});
      message.reply(`You are on cooldown for **${remaining}<:cooldown:711864794256506920>**`)
      .then(msg => {
          msg.delete({ timeout: 4000 })
        })
      
    } else{
        let after = message.content.slice (7); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://cdn.zerotwo.dev/CLAP/2c6f17df-9f71-4a5c-b35a-76afb942f179.gif", "https://cdn.zerotwo.dev/CLAP/502e1625-d04b-4ae5-b48b-cc8e8937569b.gif", "https://cdn.zerotwo.dev/CLAP/2959ad01-1b78-4a25-8208-52c17652d924.gif", "https://cdn.zerotwo.dev/CLAP/a025b963-1827-45f2-b541-29ec4ee414f1.gif", "https://media.tenor.com/images/662113b6222974aae03bf4824346797d/tenor.gif", "https://media.tenor.com/images/657f0c243282921245c0b9f4b1525c1b/tenor.gif", "https://media.tenor.com/images/b12e29a35e5ede808b6b8038ef687415/tenor.gif", "https://media.tenor.com/images/16d1a9213df9e16019de8957ddbcb554/tenor.gif", "https://media.tenor.com/images/3ca5626e1451bb28ee85d06bd7985fe2/tenor.gif", "https://media.tenor.com/images/96edde8c20a9af6a62ae913a5d24ec51/tenor.gif", "https://media.tenor.com/images/f5f4bd1995f3fe9785f70de138fa19ca/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> claps ${after}**`)
    .setImage(replies[result])
    .setColor("b91dff")

    message.channel.send(gifembed);

    usedCommandRecently.set(message.author.id, Date.now() + 10000);
    setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
    }, 10000);
    }
};

module.exports.help = {
    name: "clap",
    description: "Sends a clap gif.",
    usage: "``v.clap``",
    aliases: "none",
    accessableby: "Members"
}