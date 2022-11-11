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
    let replies = ["http://i.imgur.com/ct76LIg.gif", "http://i.imgur.com/Asnv32U.gif", "https://cdn.weeb.sh/images/HkZDkeamf.gif", "https://cdn.zerotwo.dev/CUDDLE/0d845dcd-09ad-43c4-9865-d5cc8d715abb.gif", "https://cdn.zerotwo.dev/CUDDLE/b0a15611-f5bb-4fdd-9061-7afc2da9d566.gif", "https://cdn.zerotwo.dev/CUDDLE/1f62e583-1490-4b18-a8c7-7ef5a6ca099a.gif", "https://cdn.zerotwo.dev/CUDDLE/f2e966d9-d33e-433f-b0c6-e1c80064b12a.gif", "https://cdn.zerotwo.dev/CUDDLE/0bc80a48-312e-4b11-8ce2-b7b402a3e8f8.gif", "https://cdn.zerotwo.dev/CUDDLE/3a05d3ad-3f46-442f-aa9b-97d0880dad40.gif", "https://cdn.zerotwo.dev/CUDDLE/6fb74a1d-a8b6-4b33-ad38-80bded64ec1b.gif", "https://cdn.zerotwo.dev/CUDDLE/b99280fe-5bba-42c9-87bf-fcaf198445c7.gif', 'https://cdn.zerotwo.dev/CUDDLE/ef4f0656-f3dc-42bd-91a0-04a1631302c0.gif", "https://cdn.weeb.sh/images/HkUlIUXDZ.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (9);
        let gifembed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}> cuddles ${after}**`)
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
    name: "cuddle",
    aliases: "none",
    usage: "``v.cuddle @User``",
    description: "Cuddle someone",
    accessebleby: "Members"
}