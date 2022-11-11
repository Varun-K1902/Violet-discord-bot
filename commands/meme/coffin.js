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
    let member = message.mentions.users.first();
    let replies = ["https://media1.tenor.com/images/f2496db800f135357131a77b102cd552/tenor.gif?itemid=16797420", "https://media1.tenor.com/images/86ac7ce1967ee8b0632bdd674b701902/tenor.gif?itemid=16813289"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (9);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> does the coffin dance ${after}**`)
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
    name:"coffin",
    aliases: "none",
    usage: "``v.coffin``",
    description: "Sends a meme gif.",
    accessableby: "Members"
}