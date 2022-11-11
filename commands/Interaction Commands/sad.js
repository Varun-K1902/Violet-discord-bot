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
    let replies = ["https://media.tenor.com/images/d423460bc5d93c207f0336dd328735f2/tenor.gif", "https://media.tenor.com/images/b32248553d620e04fddb85b80b8285b9/tenor.gif", "https://media.tenor.com/images/32c9541676bcd3ee03e069b95432c20e/tenor.gif", "https://media.tenor.com/images/03bf00cb8965915aff917b715a24e89a/tenor.gif", "https://media.tenor.com/images/619685e785eec7f65f54d1d6a0a99319/tenor.gif", "https://media.tenor.com/images/42dbe11a66d256fe59f9499d0d562e2b/tenor.gif", "https://cdn.zerotwo.dev/SAD/dea4e3ef-9af8-40c3-bddd-7c1a4aefe371.gif", "https://cdn.zerotwo.dev/SAD/2c2702a8-04bc-438d-9b86-d76a20a1de22.gif", "https://cdn.zerotwo.dev/SAD/fd316a94-f3cc-4819-89b3-5b25b61a1a91.gif", "https://cdn.zerotwo.dev/SAD/16b55366-09b1-4128-abd1-8e786a9f1a7f.gif", "https://cdn.zerotwo.dev/SAD/76f8a4cb-da99-4257-a1d9-17362a1e6086.gif", "https://cdn.zerotwo.dev/SAD/ab7a526e-0200-42df-ae93-9ed9d41aeac3.gif", "https://cdn.zerotwo.dev/SAD/42c6d7c0-4250-496e-afc9-6c7db1c42d89.gif", "https://media.tenor.com/images/5a3c23dd4f975bb395043eeb9c8ef3be/tenor.gif", "https://media.tenor.com/images/c7ddd8a85b035de81bf1927f9294eeb0/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is sad ${after}**`)
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
    name: "sad",
    description: "Sends a sad gif.",
    usage: "``v.sad``",
    aliases: "none",
    accessableby: "Members"
}