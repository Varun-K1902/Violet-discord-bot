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
    let replies = ["https://media.tenor.com/images/8af6311c5a08be72fc4abd0605f71c64/tenor.gif", "https://media.tenor.com/images/8638e5635f69a8409d86f587bbf6e466/tenor.gif", "https://media.tenor.com/images/26ccb921b431a51b01b4c50bd6711331/tenor.gif", "https://media.tenor.com/images/b11b29c7ad44542e326f0013bddc10be/tenor.gif", "https://media.tenor.com/images/f2e6016e02d0fc80acea0644fb631e57/tenor.gif", "https://media.tenor.com/images/2d31650e4d74426c9bcbdafd91dd5ed9/tenor.gif", "https://media.tenor.com/images/bd6ce051be80fe317dcea77d52193c85/tenor.gif", "https://cdn.discordapp.com/attachments/712613222737379349/712656354199994438/giphy_1.gif", "https://cdn.discordapp.com/attachments/712613222737379349/712656704042696754/InnocentHonoredAntelopegroundsquirrel-size_restricted.gif", "https://cdn.discordapp.com/attachments/712613222737379349/712657004031770664/7496243_orig.gif", "https://media.tenor.com/images/47149a798e43980e7e20c66f83ab9f72/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> sighs ${after}**`)
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
    name: "sigh",
    description: "Sends a sigh gif.",
    usage: "``v.sigh``",
    aliases: "none",
    accessableby: "Members"
}