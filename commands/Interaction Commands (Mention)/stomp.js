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
    let replies = ["https://media.tenor.com/images/837c5f85984d7f00aafb992b2a1560b7/tenor.gif", "https://media.tenor.com/images/f29b0a6e9ab91a5505b8c1a4521b58d0/tenor.gif", "https://media.tenor.com/images/8b8dae4eb49170b005194057a187600c/tenor.gif", "https://media.tenor.com/images/acdc5d394761908cc9348aa6f04ac224/tenor.gif", "https://cdn.zerotwo.dev/STOMP/2b98e096-bfd1-44e0-be72-c3bb8e068535.gif", "https://cdn.zerotwo.dev/STOMP/55aba3f8-f3bf-42d8-8c62-7bcaee8f73d4.gif", "https://cdn.zerotwo.dev/STOMP/0b7154b5-03b8-49be-887f-dc61d53b2dbb.gif", "https://cdn.zerotwo.dev/STOMP/b9bb4ee9-2257-40f8-8127-7efebd66a2b4.gif", "https://cdn.zerotwo.dev/STOMP/5feb5acb-dbce-4ddc-acf3-aee1ca864dfe.gif", "https://cdn.zerotwo.dev/STOMP/bea7763f-230f-4e6d-9d79-5a702873657e.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (8);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> stomps ${after}**`)
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
    name: "stomp",
    aliases: "none",
    usage: "``v.stomp @User``",
    description: "``Stomp someone``",
    accessebleby: "Members"
}