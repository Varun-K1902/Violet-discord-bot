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
        let after = message.content.slice (12); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/f3cd281516b31b0e69bfeee86e3ea9be/tenor.gif", "https://i.imgur.com/ux69VRK.gif", "https://i.imgur.com/X4q7aiC.gif", "https://i.imgur.com/iUaP4yL.gif", "https://i.imgur.com/ejQvYyQ.gif", "https://i.imgur.com/gi5Abu7.gif", "https://thumbs.gfycat.com/FrayedGrimColt.webp", "https://i.imgur.com/jVsrVnn.gif", "https://i.imgur.com/glnXw3K.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> wishes you a very happy birthday! ${after}**`)
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
    name: "happybday",
    description: "Wish someone a happy birthday.",
    usage: "``v.happybday``",
    aliases: "none",
    accessableby: "Members"
}