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
    let replies = ["https://media.tenor.com/images/30bde4274d30becac7e20144fc13be10/tenor.gif", "https://media.tenor.com/images/5aec5f5ffa7de54f804e67474964fc90/tenor.gif", "https://cdn.zerotwo.dev/BITE/cb233dd9-5875-44c1-9c05-6287ad4cccb9.gif", "https://cdn.zerotwo.dev/BITE/c78e4abc-4130-4fc7-a26d-8460d3da0af2.gif", "https://cdn.zerotwo.dev/BITE/22b00501-940b-4bb5-bd7b-19c3e48380f1.gif", "https://cdn.zerotwo.dev/BITE/de6cf869-916c-4fc2-876d-4b2fabb75cf9.gif", "https://cdn.weeb.sh/images/r1Vk-x7sZ.gif", "https://cdn.weeb.sh/images/H1_Jbemjb.gif", "https://cdn.weeb.sh/images/H1hige7sZ.gif", "https://cdn.weeb.sh/images/BJXRmfr6-.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> bites ${after}**`)
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
    name:"bite",
    aliases: "none",
    usage: "``v.bite @User``",
    description: "Bite someone.",
    accessableby: "Members"
}