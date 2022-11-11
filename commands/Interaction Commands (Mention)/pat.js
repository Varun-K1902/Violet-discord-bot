const Discord = module.require("discord.js");
const usedCommandRecently = new Map();
const Duration = require('humanize-duration');

module.exports.run = async (bot, message, args) => {
    console.log("pat works!");
    const cooldown = usedCommandRecently.get(message.author.id);
    if(cooldown){
        const remaining = Duration(cooldown - Date.now(), { units: ['s'], round: true});
        message.reply(`You are on cooldown for **${remaining}<:cooldown:711864794256506920>**`)
        .then(msg => {
            msg.delete({ timeout: 4000 })
          })
        
    } else{
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://cdn.zerotwo.dev/PAT/02aa0b00-4ddd-4914-a0c2-1d6fa2116f0b.gif", "https://cdn.zerotwo.dev/PAT/74c973fe-407e-42a0-9638-8a468d864228.gif", "https://cdn.zerotwo.dev/PAT/04222d6e-9941-412c-a2a2-95daad49221c.gif", "https://cdn.zerotwo.dev/PAT/c87a4ce4-e8d2-4ad6-918e-1370582d85a8.gif", "https://cdn.zerotwo.dev/PAT/26015f21-0e76-4932-9ccd-936704f6b6dd.gif", "https://cdn.zerotwo.dev/PAT/d6f2894c-a59c-4f1c-986e-1b0491130f31.gif", "https://cdn.zerotwo.dev/PAT/7c100d69-9b66-405a-aa77-f793d4ae94d4.gif", "https://cdn.zerotwo.dev/PAT/4762fddd-78bc-46c5-8ca5-dab7372c8b5b.gif", "https://cdn.zerotwo.dev/PAT/22558e1f-746c-482d-a264-2160feb24716.gif", "https://cdn.zerotwo.dev/PAT/91d42571-417b-4130-98b7-c5e653ea6cc4.gif", "https://cdn.zerotwo.dev/PAT/18eb4077-a133-4865-9c2d-e2c5e42b908e.gif", "https://cdn.weeb.sh/images/Sky1x1YwW.gif", "https://cdn.weeb.sh/images/rkZbJAYKW.gif", "https://cdn.weeb.sh/images/ry1tlj2AW.gif", "https://cdn.weeb.sh/images/r1goyytPZ.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (6);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> pats ${after}**`)
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
    name: "pat",
    aliases: "none",
    usage: "``v.pat @User``",
    description: "Give someone some pats",
    accessebleby: "Members"
}