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
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/c42404e3286c531bf814fbf29559df73/tenor.gif", "https://media.tenor.com/images/71995c1fdfb1cf50f181f6f3c53ec3ad/tenor.gif", "https://media.tenor.com/images/08df809187062e5b14d060000258a546/tenor.gif", "https://media.tenor.com/images/181bebe4fc30becd8147f2110b65e25b/tenor.gif", "https://media.tenor.com/images/eb76d4cbc529a37cb1cbe770c15ea0d5/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> saves ${after}**`)
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
    name:"save",
    aliases: "none",
    usage: "``v.save @User``",
    description: "Save someone.",
    accessableby: "Members"
}