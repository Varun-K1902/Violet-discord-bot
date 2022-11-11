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
    let replies = ["https://media.tenor.com/images/77a847eac081a08e9d554aeb995a43c5/tenor.gif", "https://media1.tenor.com/images/e299ce85981309b6e907964d334b324c/tenor.gif?itemid=5628634", "https://media2.giphy.com/media/dlL6NaK6kpies/source.gif", "https://img.memecdn.com/stfu_o_670199.gif", "https://i.pinimg.com/originals/1f/79/9d/1f799d44861b9d5f08fec9d930b0d60d.gif", "https://media.giphy.com/media/ThRuceOtMuk7e/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> says shut the fuck up ${after}**`)
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
    name: "stfu",
    aliases: "none",
    usage: "``v.stfu @User``",
    description: "Tell someone to stfu",
    accessebleby: "Members"
}