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
    let replies = ["https://media.tenor.com/images/4ea5a1f32764091f5c433bf0b1c778d1/tenor.gif", "https://media.tenor.com/images/d500df01e76929c0037a020612abc9d3/tenor.gif", "https://media.tenor.com/images/769fede93ec2f2293dadca1e0449eb50/tenor.gif", "https://media.tenor.com/images/5d7562412d306b22dbe11eb6da33fd24/tenor.gif", "https://cdn.zerotwo.dev/SMILE/b1b62069-48bf-4630-a660-74918f054231.gif", "https://cdn.zerotwo.dev/SMILE/5930db6c-8a5c-41a8-a7ba-96bb146d7c39.gif", "https://cdn.zerotwo.dev/SMILE/032ebd62-02f1-460a-a5e6-59e6ea841328.gif", "https://cdn.zerotwo.dev/SMILE/02cf4b54-42a6-471b-bf10-3fc7cc21b2e0.gif", "https://cdn.zerotwo.dev/SMILE/0287a3c4-a509-4aaa-81b6-3d9ca0933a1b.gif", "https://cdn.zerotwo.dev/SMILE/8563bf06-84a8-46b4-a62b-e51ba1ea1015.gif", "https://cdn.zerotwo.dev/SMILE/0db9c7c4-5de8-4a64-ba5f-0b67987ffeb0.gif", "https://cdn.zerotwo.dev/SMILE/c4c2a05a-a648-42de-8549-dcf839071049.gif", "https://cdn.zerotwo.dev/SMILE/8a68a937-a027-4948-be06-fb5f0f7207a4.gif", "https://cdn.zerotwo.dev/SMILE/be4b79e1-01f0-46c0-a64b-3990467d778f.gif", "https://cdn.zerotwo.dev/SMILE/6833cccd-4831-4169-8ade-1e82366098a3.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> smiles ${after}**`)
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
    name: "smile",
    description: "Sends a smile gif.",
    usage: "``v.smile``",
    aliases: "smileat",
    accessableby: "Members"
}