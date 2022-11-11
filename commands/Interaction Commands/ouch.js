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
    let replies = ["https://media.tenor.com/images/a53306540a3bbdd9e6179ee02fa07352/tenor.gif", "https://media.tenor.com/images/0fb9d75eb4653c789a6fdfe616979b92/tenor.gif", "https://media.tenor.com/images/a3ac75eb90a070f6501cf69e03ffb7f9/tenor.gif", "https://media.giphy.com/media/PPyxyvpnbT9RK/giphy.gif", "https://gfycat.com/scornfulaffectionatefulmar", "https://media1.tenor.com/images/b451a45a370d2b21ca4c6dece230a082/tenor.gif?itemid=10268886", "https://pa1.narvii.com/6001/6433fc3912b7c0826b1144c68c7b606d08c5ccfe_hq.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is hurt! ouch! ${after}**`)
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
    name: "ouch",
    description: "Sends a ouch gif.",
    usage: "``v.ouch``",
    aliases: "none",
    accessableby: "Members"
}