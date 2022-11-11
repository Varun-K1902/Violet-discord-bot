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
    let replies = ["https://cdn.zerotwo.dev/POUT/e82e1af3-41da-4818-8cc4-9ed780aec680.gif", "https://cdn.zerotwo.dev/POUT/cfe84bda-e57d-446b-be9b-f3a41f154844.gif", "https://cdn.zerotwo.dev/POUT/45406803-26c1-4d0b-b11a-21635a539cb5.gif", "https://cdn.zerotwo.dev/POUT/8942837b-f8ab-47b1-9598-9f8e3098959b.gif", "https://cdn.zerotwo.dev/POUT/c38357f2-a8e0-4037-a029-9338e0f51d5e.gif", "https://cdn.zerotwo.dev/POUT/ffb30eb9-6252-4ecf-862e-cd19050da3ca.gif", "https://cdn.zerotwo.dev/POUT/e1c7bdcd-0b8f-4532-aaba-661a7ef1615b.gif", "https://cdn.zerotwo.dev/POUT/01b520dc-e2d1-4e23-adaf-4850bc0de82e.gif", "https://media.tenor.com/images/011ec2a67e69cd48570bf530ce84016b/tenor.gif", "https://media.tenor.com/images/899dc95151df5294253b194459adabc5/tenor.gif", "https://media.tenor.com/images/ce2303381c7510cfd9c3714fbb1a56d3/tenor.gif", "https://media.tenor.com/images/207b883cfed8c70fb7489bb38372ebba/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> pouts ${after}**`)
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
    name: "pout",
    description: "Sends a pout gif.",
    usage: "``v.pout``",
    aliases: "none",
    accessableby: "Members"
}