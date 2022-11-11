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
    let replies = ["https://media.giphy.com/media/4bpK2k0Yru5Us/giphy.gif", "https://media.tenor.com/images/529aed02dae515a28de82141cfd0b019/tenor.gif", "https://media.tenor.com/images/0a370ed665867519a6fe69c91bf4ef1e/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (12);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> disappears ${after}**`)
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
    name:"disappear",
    aliases: "none",
    usage: "``v.disappear``",
    description: "Sends a disappearing man gif.",
    accessableby: "Members"
}