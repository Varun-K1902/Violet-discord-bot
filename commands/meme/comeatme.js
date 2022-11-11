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
    let replies = ["https://media.tenor.com/images/08b221fd3b14ef9908005f25028a9f0a/tenor.gif", "https://media.tenor.com/images/b6aaabe696e957592183b85de3d903ab/tenor.gif", "https://media.tenor.com/images/2c8a8e3b1f661edbc2be0929797491c4/tenor.gif" ,"https://media.tenor.com/images/ca87a6878e6c8cefd264e615e281b0da/tenor.gif", "https://media.tenor.com/images/a12c87ead5667c18074e73cf2ee2ea53/tenor.gif", "https://media.tenor.com/images/7ccf9ea59df182f4b597d10fd589e55f/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (11);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> taunts at you! ${after}**`)
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
    name:"comeatme",
    aliases: "none",
    usage: "``v.comeatme``",
    description: "Sends a come at me bro meme gif.",
    accessableby: "Members"
}