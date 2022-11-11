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
    let replies = ["https://cdn.zerotwo.dev/RUN/f4e30d89-e9eb-49a1-8218-ba1e6d125785.gif", "https://cdn.zerotwo.dev/RUN/43fd0919-37c9-4c67-ad46-1f574aec18c1.gif", "https://cdn.zerotwo.dev/RUN/fdc4a247-b17f-496f-97bc-ba07b4808cb5.gif", "https://cdn.zerotwo.dev/RUN/2c5399f8-edef-4c20-b844-b61c61bace12.gif", "https://cdn.zerotwo.dev/RUN/f9a154cb-bee8-4ec2-a00a-a9749f726893.gif", "https://media.tenor.com/images/dfd3fccaf45c434bffb07988d1efa75a/tenor.gif", "https://media.tenor.com/images/e1d125853d3fe0a08e03174b9972b367/tenor.gif", "https://media.tenor.com/images/730f19930ec68e03fac4ca9c66239a28/tenor.gif", "https://media.tenor.com/images/36365dd222a136373fd3238f84933e3f/tenor.gif", "https://media.tenor.com/images/10f23104893fb128b74f7606b5705c77/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> runs ${after}**`)
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
    name: "run",
    description: "Sends a running gif.",
    usage: "``v.run``",
    aliases: "runwith, runaway",
    accessableby: "Members"
}