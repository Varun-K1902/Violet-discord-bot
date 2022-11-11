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
    let replies = ["https://imgur.com/eP7NKy7.gif", "https://imgur.com/wzn0ghV.gif", "https://imgur.com/a3upumA.gif", "https://imgur.com/g005tMV.gif", "https://imgur.com/D8SIe4Z.gif", "https://imgur.com/3SsZUVT.gif", "https://imgur.com/aBQJPvZ.gif", "https://imgur.com/xmj8XRD.gif", "https://imgur.com/meZ0TDz.gif", "https://imgur.com/Lbzh24f.gif", "https://imgur.com/UYKs7Q1.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (8);
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> bullies ${after}**`)
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
    name: "bully",
    aliases: "none",
    usage: "``v.bully @User``",
    description: "Bully someone",
    accessebleby: "Members"
}