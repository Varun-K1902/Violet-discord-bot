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
        let after = message.content.slice (6); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/d7286a667f4c7f5e3af2daf2ac3d9948/tenor.gif", "https://cdn.zerotwo.dev/CRY/97bdb2d1-4b0a-419b-ab29-7f2567eebf9d.gif", "https://cdn.zerotwo.dev/CRY/f689aae4-4c55-4c94-9cd9-e41569ccf738.gif", "https://cdn.zerotwo.dev/CRY/df8f1f99-10bb-4fe0-89c3-1bf66fc51bb8.gif", "https://cdn.zerotwo.dev/CRY/ddc178dd-f55e-44f6-9599-a3d98de5bcf7.gif", "https://cdn.zerotwo.dev/CRY/c21386af-09c4-47ae-b5a3-de385d677fe4.gif", "https://cdn.weeb.sh/images/r1OCr1hqM.gif", "https://cdn.weeb.sh/images/rJfB787PW.gif", "https://cdn.weeb.sh/images/Hk6EmLmDZ.gif", "https://cdn.weeb.sh/images/r1O8QUmvb.gif", "https://cdn.weeb.sh/images/rJUbkgqyf.gif", "https://cdn.weeb.sh/images/HkxLXIQvb.gif", "https://cdn.weeb.sh/images/ryVBX8mw-.gif", "https://media.tenor.com/images/82c7523a9b203fc4e938d2d027540dea/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> cries ${after}**`)
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
    name: "cry",
    description: "Sends a crying gif.",
    usage: "``v.cry``",
    aliases: "none",
    accessableby: "Members"
}