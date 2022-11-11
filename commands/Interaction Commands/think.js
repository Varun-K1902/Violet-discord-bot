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
        let after = message.content.slice (8); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.giphy.com/media/13Z5kstwARnPna/giphy.gif", "https://media.giphy.com/media/kQ3FSVoJrkYWk/giphy.gif", "https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif", "https://media.giphy.com/media/3o6nV1Fpx2p7hWZbJm/giphy.gif", "https://media.giphy.com/media/6XX4V0O8a0xdS/giphy.gif", "https://media.giphy.com/media/Qv4kwtOyX9wfgW4FO2/giphy.gif", "https://media.giphy.com/media/xT1R9UL4AM8jksfeCc/giphy.gif", "https://media.giphy.com/media/3o6wNQs3tcUcMqzH7q/giphy.gif", "https://media.giphy.com/media/xT1Ra2Ig09ZEopynrq/giphy.gif", "https://media.tenor.com/images/91e477c5e6500c589adecb589009c41c/tenor.gif", "https://media.tenor.com/images/b6881882d9956eaf2308c0831c1f5936/tenor.gif", "https://media.tenor.com/images/7207dcd0449b260391b7e6dbaeec28d4/tenor.gif", "https://media.tenor.com/images/da083b91111dbe973e090c67e0cf8d72/tenor.gif", "https://media.tenor.com/images/7b3be81a95195e3d461089e68731d3bd/tenor.gif", "https://media.tenor.com/images/07c5a7a9961282617cb237d07886a1b0/tenor.gif", "https://media.tenor.com/images/12c63a29ed7eb34446d5608403c1d09c/tenor.gif", "https://media.tenor.com/images/5377693d81239c1a1a56d9428a033dce/tenor.gif", "https://media.tenor.com/images/a5c375a981a185df5b7d9dd68cc474b5/tenor.gif", "https://media.tenor.com/images/8733685a4d1c2c6467c38e7beac8cc47/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is thinking ${after}**`)
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
    name: "think",
    description: "Sends a thinking gif.",
    usage: "``v.think``",
    aliases: "",
    accessableby: "Members"
}