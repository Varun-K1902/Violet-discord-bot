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
        let after = message.content.slice (6); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://cdn.zerotwo.dev/WASTED/f57a03fd-9eb3-49e0-979d-627d76f39eb7.gif", "https://cdn.zerotwo.dev/WASTED/b6426ebd-6e54-48f3-839c-a0ffa46a6e53.gif", "https://cdn.zerotwo.dev/WASTED/82dd2c69-8f82-48eb-9f8f-a524d92d1358.gif", "https://cdn.zerotwo.dev/WASTED/fac47b3a-3267-471a-8bab-662cd7c11e70.gif", "https://cdn.zerotwo.dev/WASTED/04f8f44f-b367-4717-b85d-07d7cb00258e.gif", "https://media.tenor.com/images/31c5a212899c9d633f575bacf738dc15/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> dies ${after}**`)
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
    name: "die",
    description: "Sends a dieing gif.",
    usage: "``v.die``",
    aliases: "none",
    accessableby: "Members"
}