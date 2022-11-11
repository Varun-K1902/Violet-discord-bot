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
    let replies = ["https://media.giphy.com/media/24xRxrDCLxhT2/giphy.gif", "https://media.giphy.com/media/UqZ4imFIoljlr5O2sM/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (11);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> says "Just do it!" ${after}**`)
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
    name:"justdoit",
    aliases: "none",
    usage: "``v.justdoit``",
    description: "Tell someone to just do it.",
    accessableby: "Members"
}