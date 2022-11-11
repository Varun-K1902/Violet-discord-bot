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
    let replies = ["https://media.tenor.com/images/baf2add9c51f20a300c2c70bc97b670e/tenor.gif", "https://media.tenor.com/images/4e41adcbbfcb99c8b8bdcab6aa9e0b0e/tenor.gif", "https://media.tenor.com/images/a2d9781cabda619af4e8a51dd9aa5604/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (10);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> wants in ${after}**`)
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
    name:"letmein",
    aliases: "none",
    usage: "``v.letmein``",
    description: "Ask someone to let you in.",
    accessableby: "Members"
}