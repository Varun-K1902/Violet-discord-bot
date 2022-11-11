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
        let after = message.content.slice (10); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/aad1c4387ce09674a5fdf5aecdbd6bd4/tenor.gif", "https://media.tenor.com/images/7c0d573341c48ba65205d456428741af/tenor.gif", "https://media.tenor.com/images/d10e7bdd27caea6482120f9f0beb7369/tenor.gif", "https://media.tenor.com/images/43e99ca423025e592130a1c6c937159e/tenor.gif", "https://media.tenor.com/images/e7e4d1d009262fc52dca352648e25d64/tenor.gif", "https://media.tenor.com/images/6665c57af123e46c25195d4bcea1c13b/tenor.gif", "https://media.tenor.com/images/7b4bd474fa60cb86536371c1ac29e8ae/tenor.gif", "https://media.tenor.com/images/51fb2e72cd2f01b9af9fa9bd02347028/tenor.gif", "https://media.tenor.com/images/086364472680ddd060e8eb5b6cc599dd/tenor.gif", "https://media.tenor.com/images/1ee13ba2b5e97c3e990456f800c19921/tenor.gif", "https://media.tenor.com/images/6c469512438f7b2e22be88c82bc5d7fe/tenor.gif", "https://media.tenor.com/images/b2e686302dd6d0ae3538be04852a2506/tenor.gif", "https://media.tenor.com/images/d6d5264cdecf6531257b49c5890d139d/tenor.gif", "https://media.tenor.com/images/ccbac03bec6262aa0ae943b5e58135ba/tenor.gif", "https://media.tenor.com/images/8eb3862cfae4553965e88da370c1328c/tenor.gif", "https://media.tenor.com/images/2fc91eb902c01cb9c61b27cf453d4208/tenor.gif", "https://media.tenor.com/images/2ed3047215fab3a14ac982c858153000/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is annoyed ${after}**`)
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
    name: "annoyed",
    description: "Sends an annoyed gif.",
    usage: "``v.annoyed``",
    aliases: "none",
    accessableby: "Members"
}