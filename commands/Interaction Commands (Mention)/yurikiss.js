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
    let replies = ["https://media.tenor.com/images/917ea87652701e3c478f1b8e0602fb1f/tenor.gif", "https://media.tenor.com/images/8055f65e50552b785ac7b5d160486e2a/tenor.gif", "https://media.tenor.com/images/18d45e78848f48ad63819f8b27514524/tenor.gif", "https://media.tenor.com/images/20cda947d1119297d5ce3eda4a905827/tenor.gif", "https://media.tenor.com/images/c6035c32f4aa7b369409a12fe7d607e9/tenor.gif", "https://media.tenor.com/images/863e9d8dbf9776f1a456440d95de39e9/tenor.gif", "https://media.tenor.com/images/a4f867eb206ebe2dd9215bec887fbb6f/tenor.gif", "https://media.tenor.com/images/4df7ad3b46aac42127d9166f4abc65e7/tenor.gif", "https://media.tenor.com/images/bce7f3bad61ec71cbf2fcae473901fc1/tenor.gif", "https://media.tenor.com/images/9f040d80463ea9aa843d72cb7b1eb550/tenor.gif", "https://media.tenor.com/images/5f993a8a9f895d6ce5bccc2dff1ddc37/tenor.gif", "https://media.tenor.com/images/de18124ebe36764446ee2dbf54a672bf/tenor.gif", "https://media.tenor.com/images/6d10f80f9f7b7effac346b82d229c46e/tenor.gif", "https://media.tenor.com/images/4ad024c4737a61ee33b2cc425291cfc1/tenor.gif", "https://media.tenor.com/images/e9b307f6ead4c5d366dc22deb6bc6ba5/tenor.gif", "https://cdn109.picsart.com/205943122000202.gif?to=min&r=640", "https://i.pinimg.com/originals/22/46/e3/2246e33a30ba421982abb993afe9c1ad.gif", "https://data.whicdn.com/images/328811537/original.gif", "https://i.gifer.com/EeoI.gif", "https://i.pinimg.com/originals/bc/c6/e6/bcc6e6c3e40350627fc021bd61b80eb6.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (11);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> kisses ${after}**`)
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
    name: "yurikiss",
    aliases: "none",
    usage: "``v.yurikiss @User``",
    description: "Give someone a kiss with yuri gif",
    accessebleby: "Members"
}