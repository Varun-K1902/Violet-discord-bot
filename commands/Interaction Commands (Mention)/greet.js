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
    let replies = ["https://cdn.zerotwo.dev/GREET/7099380a-8667-4879-98da-f93cc28278db.gif", "https://cdn.zerotwo.dev/GREET/77e328a0-f2dc-445c-8d4f-6ed0c152d707.gif", "https://cdn.zerotwo.dev/GREET/560a2840-eb46-415b-a05e-a00084d9d9a3.gif", "https://cdn.zerotwo.dev/GREET/560a2840-eb46-415b-a05e-a00084d9d9a3.gif", "https://cdn.zerotwo.dev/GREET/3862d046-45ad-45e5-a275-0271c73f48a1.gif", "https://cdn.zerotwo.dev/GREET/61215e27-ee22-4d69-a392-1d878a1310aa.gif", "https://cdn.zerotwo.dev/GREET/8abc17a1-6f41-416e-8d1d-7baa5b3867ec.gif", "https://cdn.zerotwo.dev/GREET/08798be2-cfc0-415e-8ea9-9790ec31a159.gif", "https://cdn.zerotwo.dev/GREET/70a5cda3-2064-456d-8e20-f5982a5f795a.gif", "https://cdn.zerotwo.dev/GREET/165c77fc-12f0-4218-a59b-367c47883331.gif", "https://cdn.zerotwo.dev/GREET/641a9b0e-8b0e-49f6-9a3f-cbff9e3bb146.gif", "https://cdn.weeb.sh/images/ry8FIs30W.gif;https://cdn.weeb.sh/images/BkJ-BshRZ.gif", "https://cdn.weeb.sh/images/BJ0ZSonR-.gif;https://cdn.weeb.sh/images/HkVE4ih0W.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (8);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> greets ${after}**`)
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
    name: "greet",
    aliases: "none",
    usage: "``v.greet @User``",
    description: "Greet someone",
    accessebleby: "Members"
}