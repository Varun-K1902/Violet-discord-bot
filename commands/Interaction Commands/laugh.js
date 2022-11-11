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
    let replies = ["https://media.tenor.com/images/8c23b964645e1e7de2b958964efb5328/tenor.gif", "https://media.tenor.com/images/215fc61f486486ebfc40c235e2c6b970/tenor.gif", "https://media.tenor.com/images/114732cc0b35c228006d734b0051b9ee/tenor.gif", "https://media.tenor.com/images/c51781cb6033e71ab510bb989bda878f/tenor.gif", "https://media.tenor.com/images/ac3a484027a3d7f503b422da7c2bddea/tenor.gif", "https://media.tenor.com/images/7659dac023c4c296b14911cfc5558b74/tenor.gif", "https://cdn.zerotwo.dev/LAUGH/7c0cdca1-664a-4632-8ee7-0b9a1a6a8ff6.gif", "https://cdn.zerotwo.dev/LAUGH/b2de3ceb-3faf-4469-8ba5-fba5497091c1.gif", "https://cdn.zerotwo.dev/LAUGH/341afe0b-d11b-4d97-bfef-0afb6e43e486.gif", "https://cdn.zerotwo.dev/LAUGH/a35c2271-7af9-4146-9fdc-3ab233ccdc37.gif", "https://cdn.zerotwo.dev/LAUGH/5fb355d1-90f1-4082-b45b-adce04192440.gif", "https://cdn.zerotwo.dev/LAUGH/5b5dba96-626f-492c-bdaa-c5e4b4675ed7.gif", "https://cdn.zerotwo.dev/LAUGH/94a31cb6-73b3-4d77-a0c2-f1a995c3f845.gif", "https://cdn.zerotwo.dev/LAUGH/3515832c-b175-4441-9428-cc1d3ab8bcb7.gif", "https://cdn.zerotwo.dev/LAUGH/36605eca-9071-4d47-a71a-39b14c74882a.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> laughs ${after}**`)
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
    name: "laugh",
    description: "Sends a laugh gif.",
    usage: "``v.laugh``",
    aliases: "laughat",
    accessableby: "Members"
}