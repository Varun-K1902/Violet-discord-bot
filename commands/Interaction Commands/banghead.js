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
        let after = message.content.slice (11); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.giphy.com/media/IK3G4GcnBaSFq/giphy.gif", "https://media.tenor.com/images/42e9a400c3c5ab1d097c09b5ad73814f/tenor.gif", "https://media.tenor.com/images/d5080716bfaceeb0ff26daddd1388836/tenor.gif", "https://media.tenor.com/images/31b3082d06c99463c0fa40180b7127c8/tenor.gif", "https://media.tenor.com/images/d5bb04177915d41da547fdcca6619d7b/tenor.gif", "https://media.tenor.com/images/2ef77800332d64c344407707fd1c4722/tenor.gif", "https://media.tenor.com/images/b30e8625040c995b256274e1242cef51/tenor.gif", "https://media.tenor.com/images/d6d3a2d1af5d5d0bd26f4102a81a8ae0/tenor.gif"];
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> bangs their head ${after}**`)
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
    name: "banghead",
    aliases: "none",
    usage: "``v.banghead``",
    description: "Sends a banghead gif",
    accessebleby: "Members"
}