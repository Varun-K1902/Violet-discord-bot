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
        let after = message.content.slice (5); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/0575c051f55d748d88f5b6e49e0c44bd/tenor.gif", "https://media.tenor.com/images/8558e6840ed3e56887c9894c72164dfe/tenor.gif", "https://media.tenor.com/images/8c137dec8fc71da9f03547959ac82698/tenor.gif", "https://media.tenor.com/images/961843216d8f68111a94415501b7a2d0/tenor.gif", "https://media.tenor.com/images/ec84f86ad880771f0366f4ad609f0ee0/tenor.gif", "https://media.tenor.com/images/88a74742f752e6ebbc26e64dc71a9482/tenor.gif", "https://media.tenor.com/images/ebfdc6683cfc7e0dc686585be281b142/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> says good night! ${after}**`)
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
    name: "gn",
    description: "Sends a good night gif.",
    usage: "``v.gn``",
    aliases: "none",
    accessableby: "Members"
}