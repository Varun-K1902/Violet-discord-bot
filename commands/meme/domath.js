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
    let replies = ["https://media.giphy.com/media/DHqth0hVQoIzS/giphy.gif", "https://media.tenor.com/images/f6452676b8ebe26bbac383ba74ab22af/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (9);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> does calculations in their heads about this ${after}**`)
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
    name:"domath",
    aliases: "none",
    usage: "``v.domath``",
    description: "Sends a calculation gif.",
    accessableby: "Members"
}