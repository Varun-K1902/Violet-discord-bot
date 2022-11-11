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
        let after = message.content.slice (5); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/4d254606ded899e6b4b69f95a4b2942d/tenor.gif", "https://media.tenor.com/images/ce9059c1948ac8aa37ecd614773b11c9/tenor.gif", "https://media.tenor.com/images/5532c315c14ea815b0cf943d1d38229a/tenor.gif", "https://media.tenor.com/images/d500432ec193d31a06eec4a7270c799d/tenor.gif", "https://media.tenor.com/images/d3b25185e9024fa6acfea322a56ba8ed/tenor.gif", "https://media.tenor.com/images/ae799d46194f481a24933e2f94461395/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> says good morning! ${after}**`)
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
    name: "gm",
    description: "Sends a good morning gif.",
    usage: "``v.gm``",
    aliases: "none",
    accessableby: "Members"
}