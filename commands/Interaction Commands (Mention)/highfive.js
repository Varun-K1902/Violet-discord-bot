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
    let replies = ["https://cdn.zerotwo.dev/HIGHFIVE/e71ec922-9b00-4e69-9471-56e9cb380833.gif", "https://cdn.zerotwo.dev/HIGHFIVE/52ddadfc-b5c8-47c7-aa61-46e1629dc44b.gif", "https://cdn.zerotwo.dev/HIGHFIVE/0e8f65c9-ca26-45e0-ba46-7b7d20526caa.gif", "https://cdn.zerotwo.dev/HIGHFIVE/90096e47-8d22-4fc2-8aad-1fb1c49b8f30.gif", "https://cdn.zerotwo.dev/HIGHFIVE/c67ae30a-f3d7-4702-b241-204ea9cb6642.gif", "https://cdn.zerotwo.dev/HIGHFIVE/68b5e582-766d-42da-969d-77692ecd24c2.gif", "https://cdn.zerotwo.dev/HIGHFIVE/184b8dba-76e3-4709-b742-5c1c8e61f1b6.gif", "https://cdn.zerotwo.dev/HIGHFIVE/03d1bb1e-e430-414a-b649-cca434689a8d.gif", "https://cdn.zerotwo.dev/HIGHFIVE/84e7a5f2-e961-4a9a-8881-b7682b96a67f.gif", "https://cdn.zerotwo.dev/HIGHFIVE/2ea067ce-04d5-47a4-9329-c9e2cc22defb.gif", "https://cdn.zerotwo.dev/HIGHFIVE/e27d22c7-3e0e-44f4-9ae1-736fc0d393f9.gif", "https://cdn.zerotwo.dev/HIGHFIVE/dee3aacd-50b1-48a8-ba1e-5b25f44f218e.gif", "https://cdn.zerotwo.dev/HIGHFIVE/467d8c84-884b-4fb7-ad89-1430ac145370.gif", "https://cdn.zerotwo.dev/HIGHFIVE/89206b23-a758-4b95-850b-e1208334e58d.gif", "https://cdn.zerotwo.dev/HIGHFIVE/c20cf7be-e379-4555-99b2-0a53b6eee82e.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (11);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> highfives ${after}**`)
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
    name: "highfive",
    aliases: "none",
    usage: "``v.highfive @User``",
    description: "Give a highfive to someone",
    accessebleby: "Members"
}