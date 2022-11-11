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
    let replies = ["https://media.tenor.com/images/64b237ddc11ec88e94a25ddc7e55ea21/tenor.gif", "https://media.tenor.com/images/9f57bbf816a98c7d6e2735ff76c0af9b/tenor.gif", "https://media.tenor.com/images/63fbdcd8fcb959a5694b388490b2f37f/tenor.gif", "https://media.tenor.com/images/fbc58a4c866bfab2518bd8c441ee36a1/tenor.gif", "https://media.tenor.com/images/d96016156477a4db3d8ad0f04b7c9aee/tenor.gif", "https://media.tenor.com/images/50f45806e07c3672f945204367548fde/tenor.gif", "https://media.tenor.com/images/50f45806e07c3672f945204367548fde/tenor.gif", "https://media.tenor.com/images/fc418b12d229e486cf56601b1a4e93f8/tenor.gif", "https://media.tenor.com/images/4d85ff515cd264eefc0866555a1e9763/tenor.gif", "https://media.tenor.com/images/f3b2d2d41e7df68e78e818b4c065f330/tenor.gif", "https://media.tenor.com/images/92a1a8127b68d5806ee9dd6548683b3f/tenor.gif", "https://media.tenor.com/images/e13ef305ef4753cc73d3c98c28a5a900/tenor.gif", "https://gifimage.net/wp-content/uploads/2017/09/anime-hungry-gif-9.gif", "https://66.media.tumblr.com/2312f640060639857784e81ae0bee8e5/tumblr_mr15dtCgXc1s65dm8o1_500.gif", "https://66.media.tumblr.com/tumblr_m8cnq644wn1r5ud3ko1_400.gif", "https://i.gifer.com/v1E.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} wants something to eat`)
    .setDescription(`**<@${message.author.id}> is feeling hungry ${after}**`)
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
    name: "hungry",
    description: "Sends a hungry gif.",
    usage: "``v.hungry``",
    aliases: "none",
    accessableby: "Members"
}