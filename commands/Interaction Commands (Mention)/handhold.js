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
    let replies = ["https://media.tenor.com/images/eddbf7fdfc1c0dac8d839e8002d25178/tenor.gif", "https://cdn.weeb.sh/images/Hk5_ga5bG.gif", "https://cdn.weeb.sh/images/rJ2IfTq-f.gif", "https://cdn.weeb.sh/images/rJx5xa9bf.gif", "https://cdn.weeb.sh/images/H1urgT5-f.gif", "https://cdn.weeb.sh/images/rk5SMpq-M.gif", "https://cdn.weeb.sh/images/SJbTxT9Wz.gif", "https://cdn.weeb.sh/images/B1jKga5Zz.gif", "https://cdn.weeb.sh/images/B1rpeTqZf.gif", "https://cdn.weeb.sh/images/HkVFea9ZM.gif", "https://cdn.weeb.sh/images/SJ3nxT5Wz.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (11);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> holds the hand of ${after}**`)
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
    name: "handhold",
    aliases: "none",
    usage: "``v.handhold @User``",
    description: "Hold hands with someone",
    accessebleby: "Members"
}