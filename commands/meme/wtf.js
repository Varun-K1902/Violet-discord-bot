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
    let member = message.mentions.users.first();
    let replies = ["https://media.giphy.com/media/kaq6GnxDlJaBq/giphy.gif", "https://media.giphy.com/media/xL7PDV9frcudO/giphy.gif", "https://media.tenor.com/images/b846e630b6c00bdde91f708946a0d460/tenor.gif", "https://media.tenor.com/images/86eb7c00905ba5fa58b0e0bc7c7c7486/tenor.gif", "https://media.giphy.com/media/eCbjUv6x8Pe8g/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (6);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> doesn't get what the fuck is going on ${after}**`)
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
    name:"wtf",
    aliases: "none",
    usage: "``v.wtf``",
    description: "Sends a meme gif.",
    accessableby: "Members"
}