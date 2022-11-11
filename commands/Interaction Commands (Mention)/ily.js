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
    let replies = ["https://media.tenor.com/images/cef23d0415d99d834edc88f327c25a52/tenor.gif", "https://media.tenor.com/images/e122eb7a14226c3a83285d03adb9a908/tenor.gif", "https://media.tenor.com/images/eaa5b897b36a259f1e22548c78a8891a/tenor.gif", "https://media.tenor.com/images/a90352cd5a02c05b58f7212eadcdfe23/tenor.gif", "https://media.tenor.com/images/c63aed510eb91f640ee4eb2bededf5ee/tenor.gif", "https://media.tenor.com/images/a57c3740c63bfd66cf38f30d05c8c963/tenor.gif", "https://media.tenor.com/images/cdf92f97e7386e756f9f183e252650d4/tenor.gif", "https://media.tenor.com/images/bf89c9445913a505d7a3afa8aee33c7a/tenor.gif", "https://media.tenor.com/images/f3f1a7d6cfbcb6e80772f344187ac97e/tenor.gif", "https://media.tenor.com/images/caa192b43fe446e739d632dcf0b3cc9b/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (6);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> confesses their love to ${after}**`)
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
    name: "ily",
    aliases: "none",
    usage: "``v.ily @User``",
    description: "confess your love to someone",
    accessebleby: "Members"
}