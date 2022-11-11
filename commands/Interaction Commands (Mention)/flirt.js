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
    let replies = ["https://media.tenor.com/images/e9110047f26abf8c7c43a1b205dbc692/tenor.gif", "https://media.tenor.com/images/d748d47f3c97b4ac318a0a5573d3b526/tenor.gif", "https://media.tenor.com/images/b9dd5362fe19a58a1b2696402acb7f31/tenor.gif", "https://media.tenor.com/images/0547c34e9495b454cd6eace3d1730bfa/tenor.gif", "https://media.tenor.com/images/3ba7e11c5aeb9783ee7f9e3d5b5ac765/tenor.gif", "https://media.tenor.com/images/dad9b949c9a5d8f82efcf7425e2fc69e/tenor.gif", "https://media.tenor.com/images/a095eb22e7f0d74fbc34a5b40a6a89bb/tenor.gif", "https://media.tenor.com/images/a257a49766f3a85b160d9a09b16d1895/tenor.gif", "https://media.tenor.com/images/6992aab93864cca0a379ab5a89bf1190/tenor.gif", "https://media.giphy.com/media/3tGUle4w6ifUGRxhvP/giphy.gif", "https://uploads.disquscdn.com/images/0921119393f950db6ed4f6d1f5ee7ef936bd68e9e6e3a95a3523c5477070e180.gif", "https://data.whicdn.com/images/236073430/original.gif", "https://media1.tenor.com/images/9dfb257be0b2099695574dfea223cc85/tenor.gif?itemid=5428836"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> flirts with ${after}**`)
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
    name: "flirt",
    description: "Flirt with someone.",
    usage: "``v.flirt @user``",
    aliases: "none",
    accessableby: "Members"
}