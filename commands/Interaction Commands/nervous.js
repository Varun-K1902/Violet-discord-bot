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
    let replies = ["https://media.tenor.com/images/b31c22e58534688a8ef22e7ee778c6bd/tenor.gif", "https://media.tenor.com/images/0085feb65861c96985c57d0209b6923b/tenor.gif", "https://media.tenor.com/images/8fc7cf68e5f64abdeef59d72b2537e8a/tenor.gif", "https://media.tenor.com/images/bd03fd9eca6282b87a238b04b517d239/tenor.gif", "https://media.tenor.com/images/c8ebf078ab60a110666c908fc7fc1f50/tenor.gif", "https://media.tenor.com/images/ac4eb7769095118ad979e09b1291ec6a/tenor.gif", "https://media.tenor.com/images/5cf86e7c5d5ee5fbea1af3635c34fce2/tenor.gif", "https://media.tenor.com/images/11506864d8c2551dc11000acaf6c2d61/tenor.gif", "https://media.tenor.com/images/bcbaf245044b6121d77a0d050dc95afc/tenor.gif", "https://media.tenor.com/images/413a371b7eaeae948c0dcd44a1614598/tenor.gif", "https://media.tenor.com/images/20c385718216b575d7214a03a6eae7ff/tenor.gif", "https://media.tenor.com/images/e3f4b2281dbf605c5e3822cc6fafb6ae/tenor.gif", "https://media.tenor.com/images/aa3173980e218df82c817193f45f4684/tenor.gif", "https://media.tenor.com/images/566f969f9ea6b09f52726c935956e5ff/tenor.gif", "https://media.tenor.com/images/ab05a91eeb33cedd839ce2677d3c3b94/tenor.gif", "https://media.tenor.com/images/e243001def463ff7c0b4ef757d895b1c/tenor.gif", "https://media.tenor.com/images/01c0752c67e72c8e03131d274d2e6a46/tenor.gif", "https://media.tenor.com/images/c057a8d117b14747883cbc55e2ead7cf/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is nervous ${after}**`)
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
    name: "nervous",
    description: "Sends a nervous gif.",
    usage: "``v.nervous``",
    aliases: "none",
    accessableby: "Members"
}