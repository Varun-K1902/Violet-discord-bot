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
    let replies = ["https://media.tenor.com/images/7def9b856ef993648b259b2488c880ad/tenor.gif", "https://media.tenor.com/images/881dda905a552a9325966bd0c621cbde/tenor.gif", "https://media.tenor.com/images/c8fa30ce2efc6cc9720aedab09372b80/tenor.gif", "https://media.tenor.com/images/1bb71bc886fb539594d7607b21af30a1/tenor.gif", "https://media.tenor.com/images/7d6cdc411409017579683941a0297cac/tenor.gif", "https://media.tenor.com/images/55ec65c0caebfc6297c0a1decea88c6e/tenor.gif", "https://media.tenor.com/images/d8e0149e3d645a4bba8641bdab3488fd/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> sips ${after}**`)
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
    name: "sip",
    description: "Sends a sip gif.",
    usage: "``v.sip``",
    aliases: "none",
    accessableby: "Members"
}