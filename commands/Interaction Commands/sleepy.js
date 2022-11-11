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
        let after = message.content.slice (9); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/3ad841e639ccc41b4d11242ef451cd71/tenor.gif", "https://media.tenor.com/images/ebfdc6683cfc7e0dc686585be281b142/tenor.gif", "https://media.tenor.com/images/a32892ccd5b50fc1ad9219432bc4ced8/tenor.gif", "https://media.tenor.com/images/f9d879d86e1caa599235fbb0e91f74e2/tenor.gif", "https://media.tenor.com/images/dbb69bf33b1971217ff2d8a8ae3a3097/tenor.gif", "https://media.tenor.com/images/87c1214eb60e46e1ec78520c6c7cd415/tenor.gif", "https://media.tenor.com/images/045bc356fd10696ef84da052f649a5d4/tenor.gif", "https://media.tenor.com/images/57296ca615e9653f3f8400269aea659e/tenor.gif", "https://media.tenor.com/images/38573edcca0bea49e18ee043c29a0c8d/tenor.gif", "https://media.tenor.com/images/632a3c10864f331b176e2dc54a826fbf/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is sleepy ${after}**`)
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
    name: "sleepy",
    description: "Sends a sleepy gif.",
    usage: "``v.sleepy``",
    aliases: "none",
    accessableby: "Members"
}