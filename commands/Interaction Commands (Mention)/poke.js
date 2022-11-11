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
    let replies = ["https://media.tenor.com/images/c46116b9116e1baa24e96fa6c5a78818/tenor.gif", "https://media.tenor.com/images/5f0d2906b9fbffb020d0bb25b0666b1c/tenor.gif", "https://media.tenor.com/images/e13d1239f0079ee56893e429cf701f9a/tenor.gif", "https://cdn.zerotwo.dev/POKE/26c401db-85b5-45f3-bb91-45721e57c046.gif", "https://cdn.zerotwo.dev/POKE/d25729c4-1dfe-4656-8770-89b3fde0748a.gif", "https://cdn.zerotwo.dev/POKE/f426d8d1-289d-449b-b089-b00acdb61348.gif", "https://cdn.zerotwo.dev/POKE/60b2b016-7aff-4a70-a184-953c9e1c589a.gif", "https://cdn.zerotwo.dev/POKE/60b2b016-7aff-4a70-a184-953c9e1c589a.gif", "https://cdn.zerotwo.dev/POKE/ca41a55b-aaef-4ace-92df-caf3bfcadfb7.gif", "https://cdn.zerotwo.dev/POKE/e4208aaf-a8c2-4c11-b384-dab5b3bb876b.gif", "https://cdn.weeb.sh/images/HkxwlkKPb.gif", "https://cdn.weeb.sh/images/SyQzRaFFb.gif", "https://cdn.weeb.sh/images/HkjjLb0rM.gif;https://cdn.weeb.sh/images/Hk2HekKD-.gif", "https://media.tenor.com/images/b276a3af3cb2559b2c7030fe7bcf12f8/tenor.gif", "https://media.tenor.com/images/6b5c1554a6ee9d48ab0392603bab8a8e/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> pokes ${after}**`)
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
    name: "poke",
    aliases: "none",
    usage: "``v.poke @User``",
    description: "Poke someone",
    accessebleby: "Members"
}