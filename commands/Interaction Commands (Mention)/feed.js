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
    let replies = ["https://media.tenor.com/images/81d82833f3f658d0e5e95a9365aac216/tenor.gif", "https://media.tenor.com/images/28a0f999392b65149a77a7e0270ee280/tenor.gif", "https://media.tenor.com/images/a6e82eba4b87d830fc3063f15d93f5fc/tenor.gif", "https://media.tenor.com/images/8382166972e387722e74121c094ae69d/tenor.gif", "https://media.tenor.com/images/af2ca430d68c1c7f712eb66ba353af7c/tenor.gif", "https://media.tenor.com/images/9e9bd673443ee31520d7f08213859ae2/tenor.gif", "https://media.tenor.com/images/53600e9365e3348d8787c15047fdf7eb/tenor.gif", "https://media.tenor.com/images/8cd8f56c494a8ac8d0cc893d65c09fc9/tenor.gif", "https://media.tenor.com/images/ad18eb28cbad4511d6e66976d68c9c31/tenor.gif", "https://media.tenor.com/images/514b77b06c3e9ab84cbb5b8e3767b18b/tenor.gif", "https://media.tenor.com/images/8fae5fbe5a477bd93549800abbd44b83/tenor.gif", "https://media.tenor.com/images/27bc8622f846cc34dd4b5f83d463c2a4/tenor.gif", "http://i.imgur.com/VQjMsms.gif", "http://i.imgur.com/RcvnwDB.gif", "http://i.imgur.com/qbm2gpc.gif", "http://i.imgur.com/U1ODYh3.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> feeds ${after}**`)
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
    name: "feed",
    aliases: "none",
    usage: "``v.feed @User``",
    description: "Feed someone",
    accessebleby: "Members"
}