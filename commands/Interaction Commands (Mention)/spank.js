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
    let replies = ["https://media.tenor.com/images/5e1b474c7dbd15a732407ef64927fa34/tenor.gif", "https://media.tenor.com/images/f7233f60d0fbdc90adace72504b0fc2f/tenor.gif", "https://media.tenor.com/images/78c276b7b368be06d68687cc5a7208f9/tenor.gif", "https://media.tenor.com/images/0b897d9ef8af8cedbb1e749c10262775/tenor.gif", "https://media.tenor.com/images/9681a489354909e50505f7eb7e80e8f9/tenor.gif", "https://media.tenor.com/images/07dbcb00aa3f0828d12018c496031e3e/tenor.gif", "https://media.tenor.com/images/3a1305dead0dd7289822b1e46593e7fb/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (8);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> spanks ${after}**`)
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
    name: "spank",
    aliases: "none",
    usage: "``v.spank @User``",
    description: "Spank someone",
    accessebleby: "Members"
}