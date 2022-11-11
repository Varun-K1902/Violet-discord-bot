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
    let replies = ["https://media.tenor.com/images/d2ef321c223fdf54ad33e5ac98b3f535/tenor.gif", "https://media.tenor.com/images/a97daad14c5391ea0e71e830708edc8e/tenor.gif", "https://media.tenor.com/images/2bc7ca076a90c619046b10cf41585bde/tenor.gif", "https://media.tenor.com/images/f9083ef565aeb1a21d7ff75acb5c3b7a/tenor.gif", "https://media.tenor.com/images/640da85344692bf50a7839e197bb9af8/tenor.gif", "https://media.tenor.com/images/b7dfb078855217f2e8d10a464fcbfb98/tenor.gif", "https://media.tenor.com/images/e7a220a09933c1388a9d9cf18ae1ca67/tenor.gif", "https://media.tenor.com/images/eb2db010d4ffbab67a35647243ea5ce0/tenor.gif", "https://media.tenor.com/images/e79e829950fdfcc8b75fcf03151f8b58/tenor.gif", "https://media.tenor.com/images/80c4f122f4feb4225f3c69aab0e077da/tenor.gif", "https://media.tenor.com/images/c96005799f6a611d43d4a605e8cef376/tenor.gif", "https://media.tenor.com/images/feec25781ac0b466f8ab63e8a3b99a18/tenor.gif", "https://media.tenor.com/images/6c1e51e1503149d00d41495401cfc288/tenor.gif", "https://media.tenor.com/images/a75fc61c3ef5fbc9b7b0953a06945557/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> winks ${after}**`)
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
    name: "wink",
    aliases: "winkat",
    usage: "``v.wink``",
    description: "Sends a wink gif",
    accessebleby: "Members"
}