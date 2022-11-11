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
    let replies = ["https://media.tenor.com/images/f29331e4557e2deaf14817d6fc230251/tenor.gif", "https://media.tenor.com/images/b970c2aa0bbe507d05bb627e3d31b186/tenor.gif", "https://media.tenor.com/images/d68b5deb35e8c7ffad2efd182e0d4122/tenor.gif", "https://media.tenor.com/images/64586f9db56c4af9a907c91448904d71/tenor.gif", "https://media.tenor.com/images/88852d1b30595de14d235079c323d67d/tenor.gif", "https://media.tenor.com/images/639386c2eafef804d65c479d91187617/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> dabs ${after}**`)
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
    name: "dab",
    description: "Sends a dab gif.",
    usage: "``v.dab``",
    aliases: "none",
    accessableby: "Members"
}