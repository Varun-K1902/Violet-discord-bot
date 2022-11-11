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
        let after = message.content.slice (8); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://cdn.zerotwo.dev/SHRUG/2f585151-9a3f-4bc7-9458-d3f3727b2b9b.gif", "https://cdn.zerotwo.dev/SHRUG/6058e419-bce9-45d6-a693-93074eb8891a.gif", "https://cdn.zerotwo.dev/SHRUG/ac4a1957-45de-40d2-a119-cedb3adbebb1.gif", "https://cdn.weeb.sh/images/B1hai-HBG.gif", "https://cdn.weeb.sh/images/r1g4mkKvW.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> shrugs ${after}**`)
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
    name: "shrug",
    description: "Sends a shrug gif.",
    usage: "``v.shrug``",
    aliases: "none",
    accessableby: "Members"
}