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
    let replies = ["https://cdn.zerotwo.dev/LICK/53946df5-f61b-4c08-8f78-09ebe920f2dc.gif", "https://cdn.zerotwo.dev/LICK/32942215-1006-4641-a6ba-1d99eacb106a.gif", "https://cdn.zerotwo.dev/LICK/b1d7b324-f9c0-431e-bc18-a860252d017a.gif", "https://cdn.zerotwo.dev/LICK/fcddd49d-d9df-4a43-96ea-ed3e13866d47.gif", "https://cdn.zerotwo.dev/LICK/c1d84f1f-e521-4b9f-a877-4c948771bddd.gif", "https://cdn.zerotwo.dev/LICK/de790124-8878-4688-b61e-a053a44197d2.gif", "https://cdn.zerotwo.dev/LICK/ff08bde9-1040-49fa-a00a-005ce13a97c1.gif", "https://cdn.zerotwo.dev/LICK/b132a558-fbb5-4a7e-b010-8598802d1378.gif", "https://cdn.zerotwo.dev/LICK/cdd05f33-f9cd-4e1d-bf47-64ef4f010b98.gif", "https://cdn.zerotwo.dev/LICK/b6195e51-38a4-4481-9581-d242967c9630.gif", "https://cdn.zerotwo.dev/LICK/1e991ccf-199c-4382-8303-1106464b3df1.gif", "https://cdn.zerotwo.dev/LICK/7392b595-7b9a-4dbd-a8b3-5f2c913d0233.gif", "https://cdn.zerotwo.dev/LICK/93d1ea1c-20e6-4d79-bf2e-d8c7c359a60d.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> licks ${after}**`)
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
    name: "lick",
    aliases: "none",
    usage: "``v.lick @User``",
    description: "Lick someone",
    accessebleby: "Members"
}