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
    let replies = ["https://cdn.weeb.sh/images/HyYfK_Qwb.gif", "https://cdn.weeb.sh/images/S1orK_mv-.gif", "https://cdn.weeb.sh/images/By9VFuXPb.gif", "https://cdn.weeb.sh/images/ryLHF_Qv-.gif", "https://cdn.weeb.sh/images/ByONKd7wW.gif", "https://cdn.weeb.sh/images/BJrEFumv-.gif", "https://cdn.weeb.sh/images/Sk3bF_QD-.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (9);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> insults ${after}**`)
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
    name: "insult",
    aliases: "none",
    usage: "``v.insult @User``",
    description: "Insult someone",
    accessebleby: "Members"
}