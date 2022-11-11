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
    let replies = ["https://i.kym-cdn.com/photos/images/masonry/001/179/536/c7f.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (13);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is so confused ${after}**`)
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
    name:"tfconfused",
    aliases: "none",
    usage: "``v.tfconfused``",
    description: "Sends a meme gif.",
    accessableby: "Members"
}