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
        let after = message.content.slice (7); 
    let member = message.mentions.users.first();
    let replies = ["https://cdn.zerotwo.dev/GREET/641a9b0e-8b0e-49f6-9a3f-cbff9e3bb146.gif", "https://cdn.zerotwo.dev/GREET/ff604ba9-845a-45b3-9e82-68a6433f4138.gif", "https://cdn.zerotwo.dev/GREET/4490a371-e1c3-4f73-b690-15053059354e.gif", "https://cdn.zerotwo.dev/GREET/2b0939e0-d981-4c42-9b32-e5c606df78f0.gif", "https://cdn.zerotwo.dev/GREET/08798be2-cfc0-415e-8ea9-9790ec31a159.gif", "https://cdn.zerotwo.dev/GREET/0d4b781e-2751-4694-88c1-d1a0c149856e.gif", "https://cdn.zerotwo.dev/GREET/560a2840-eb46-415b-a05e-a00084d9d9a3.gif", "https://cdn.zerotwo.dev/GREET/c0feea32-b9cb-48e7-a060-e311c389e2f7.gif", "https://cdn.zerotwo.dev/GREET/1a52b424-9b97-4302-93d3-77474443e4bd.gif", "https://cdn.zerotwo.dev/GREET/0ed2eb67-9132-426b-ad74-ce9830c1fd64.gif", "https://cdn.zerotwo.dev/GREET/0426c2b8-6bc8-485e-ae8a-a77222ebc6a7.gif", "https://cdn.zerotwo.dev/GREET/70a5cda3-2064-456d-8e20-f5982a5f795a.gif", "https://cdn.zerotwo.dev/GREET/8abc17a1-6f41-416e-8d1d-7baa5b3867ec.gif", "https://cdn.zerotwo.dev/GREET/7e815e0d-9b23-4244-9ef2-2bd2f0197db7.gif", "https://cdn.zerotwo.dev/GREET/ec735d88-d9b7-4cbb-92f9-afd3bf567ece.gif", "https://cdn.zerotwo.dev/GREET/7099380a-8667-4879-98da-f93cc28278db.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> waves ${after}**`)
    .setImage(replies[result])
    .setColor("b91dff")

    message.channel.send(gifembed);

    usedCommandRecently.set(message.author.id, Date.now() + 10000);
    setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
    }, 10000);
    }
}


module.exports.help = {
    name: "wave",
    description: "Sends a wave gif.",
    usage: "``v.wave`` or ``v.wave @user``",
    aliases: "none",
    accessableby: "Members"
}