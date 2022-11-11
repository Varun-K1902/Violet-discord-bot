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
    let replies = ["https://media.tenor.com/images/463130b95a094fc6ebaa3c334e6e3a51/tenor.gif", "https://media.tenor.com/images/2ae8de10391445da74ab02f5ab4f4ab7/tenor.gif", "https://media.tenor.com/images/7ad43a1dbf4b754cd193964db96e4777/tenor.gif", "https://media.tenor.com/images/17fe9b3353b3bde580d15dbf432f6c61/tenor.gif", "https://media.tenor.com/images/0311eb50a77c88a3c33928eea0a38780/tenor.gif", "https://media.tenor.com/images/168602a4ea3c89934202cf88261945e4/tenor.gif", "https://media.tenor.com/images/f329b3dcaa45a3d14dfdb54a54b34c20/tenor.gif", "https://media.tenor.com/images/6da7bfe4cb3ed5dc269ea9795b1ee9ca/tenor.gif", "https://media.tenor.com/images/faa6978d52bef71062e77c8ea4079908/tenor.gif", "https://media.tenor.com/images/51d89e03135b40a7143058e33c532311/tenor.gif", "https://media.tenor.com/images/df81c332739aeb7c53aed3c49691742a/tenor.gif", "https://media.tenor.com/images/5700b7168bd6ec19d8a98beac6453dfd/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (5);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> wishes good luck to ${after}**`)
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
    name:"gl",
    aliases: "goodluck",
    usage: "``v.gl @User``",
    description: "Wish good luck to someone.",
    accessableby: "Members"
}