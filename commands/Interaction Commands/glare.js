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
    let replies = ["https://media.tenor.com/images/82b74068ad8e9be8c3a6678b11259c6a/tenor.gif", "https://media.tenor.com/images/f56bc9a14b1b1a7d8df2ea7b2c33f148/tenor.gif", "https://media.tenor.com/images/942497379b80eaaa9407f62c482834a1/tenor.gif", "https://media.tenor.com/images/81a16324eb3f26635bc603a3bc829e04/tenor.gif", "https://media.tenor.com/images/c3f0b2ce02489b7a64d0c51ec92f02d5/tenor.gif", "https://cdn.zerotwo.dev/GLARE/22050f14-f487-47e0-8675-3f73bc08b490.gif", "https://cdn.zerotwo.dev/GLARE/7295eecf-7d64-43b7-b4e8-05cd43ec3ccc.gif", "https://cdn.zerotwo.dev/GLARE/5cbe4b29-106a-4254-bf80-a8e35b0aab30.gif", "https://cdn.zerotwo.dev/GLARE/b952db4e-60ed-4ad2-98b0-09780972e5ff.gif", "https://cdn.zerotwo.dev/GLARE/22145d3f-7f46-47e1-b2e2-8c8a35dc16af.gif", "https://cdn.zerotwo.dev/GLARE/2d66fdaf-97ef-47d5-ae47-63dd41ca1531.gif", "https://cdn.zerotwo.dev/GLARE/94bbf8de-f4fa-44cb-861a-8c9794c1cb40.gif", "https://media.tenor.com/images/66e17ac695ed24e21b2bb8362c7f7cb2/tenor.gif", "https://media.tenor.com/images/e4b2bd0456f8feb6711a1c711a3c8e0a/tenor.gif", "https://media.tenor.com/images/98c4419f97b235a5acf636d4c95e9272/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> glares ${after}**`)
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
    name: "glare",
    description: "Sends a glare gif.",
    usage: "``v.glare``",
    aliases: "none",
    accessableby: "Members"
}