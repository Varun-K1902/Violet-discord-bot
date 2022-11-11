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
        let after = message.content.slice (7); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.giphy.com/media/3o6gEb896PcLMSMRva/200_d.gif", "https://media0.giphy.com/media/PSnqsSkKeyJ9e/source.gif", "https://1.bp.blogspot.com/-Zb_h4KN1wJs/Xg9ktzWSfnI/AAAAAAAAKho/1ovZpohhO4MSMiWwHhNFj5OvB2F9OFuFwCLcBGAsYHQ/s1600/Inosuke%2BFlex.gif", "https://i.imgur.com/r/ANIMEGIFS/tVHVHyz", "http://25.media.tumblr.com/965f61454dd5bce6b2918f35018acd92/tumblr_mk6i3bj5X21raf3v8o1_500.gif", "https://www.purefandom.com/wp-content/uploads/2018/06/Lancer.gif", "https://78.media.tumblr.com/fbaa27502a137386721a04e97c629c45/tumblr_p1rmf7sKRz1ucnqpno1_500.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> flexes at you! ${after}**`)
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
    name: "flex",
    description: "Sends a flexing gif.",
    usage: "``v.flex``",
    aliases: "none",
    accessableby: "Members"
}