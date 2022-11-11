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
        let after = message.content.slice (11); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://cdn.zerotwo.dev/FACEPALM/cb1f9f6a-8a75-4052-9679-ef1a535d0300.gif", "https://cdn.zerotwo.dev/FACEPALM/afb48e7a-f819-4b3e-8015-f5afc1311bd2.gif", "https://cdn.zerotwo.dev/FACEPALM/92fa53ed-4a8d-47d3-aa98-8299a7d28d1a.gif", "https://cdn.zerotwo.dev/FACEPALM/a7f02763-78ac-42ba-a80c-326f49d4512a.gif", "https://cdn.zerotwo.dev/FACEPALM/c0db8c6b-322c-40ad-896f-ba8efcdf51a1.gif", "https://cdn.zerotwo.dev/FACEPALM/0ab6c826-b631-4f34-a434-f470cc4f7f27.gif", "https://media.tenor.com/images/4b4c46f0a4fdb4fc6ce484a8d441fa53/tenor.gif", "https://media.tenor.com/images/59ae6e3415612f1429fb6bc5cec806da/tenor.gif", "https://media.tenor.com/images/0649be57365455f5a6518c00695c6779/tenor.gif", "https://media.tenor.com/images/082392dcd5d76b3c853ed32d22553371/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> facepalms ${after}**`)
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
    name: "facepalm",
    description: "Sends a facepalm gif.",
    usage: "``v.facepalm``",
    aliases: "none",
    accessableby: "Members"
}