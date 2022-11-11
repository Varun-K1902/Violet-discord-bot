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
    let replies = ["https://cdn.zerotwo.dev/HUG/2ea80b2b-74ed-4fee-9c88-1f903fd0c41b.gif", "https://cdn.zerotwo.dev/HUG/32548b73-d04c-4a8a-87e6-0b06f98b5a5a.gif", "https://cdn.zerotwo.dev/HUG/703a8c38-554f-4fe4-9236-53b5e487dad8.gif", "https://cdn.zerotwo.dev/HUG/48e58677-7687-4826-bb0c-cd76a7e8c34c.gif", "https://cdn.zerotwo.dev/HUG/6e5f9b5a-f4b7-4848-bd26-84024359a525.gif", "https://cdn.zerotwo.dev/HUG/f37a37f7-ed68-4742-9538-1d4015111152.gif", "https://cdn.zerotwo.dev/HUG/1b52ca7d-7628-4847-87ea-32bc4a45909d.gif", "https://cdn.zerotwo.dev/HUG/2d59c69c-8df0-4754-a7e4-b568baca1609.gif", "https://cdn.zerotwo.dev/HUG/d856f3fe-f220-41b6-b3c2-f0a2d956dd8a.gif", "https://cdn.zerotwo.dev/HUG/897d2eab-c1d9-48f3-8ac9-2bbbf4911cc7.gif", "https://cdn.zerotwo.dev/HUG/9a529777-9be2-4938-ac4d-c38166d8add0.gif", "https://cdn.weeb.sh/images/S1DyFuQD-.gif", "https://cdn.weeb.sh/images/rJCigAYFZ.gif", "https://cdn.weeb.sh/images/BJ0sOOmDZ.gif", "https://cdn.weeb.sh/images/S1qX2OJ_Z.gif", "https://cdn.weeb.sh/images/SknauOQwb.gif", "https://cdn.weeb.sh/images/HyllFdmwZ.gif", "https://cdn.weeb.sh/images/HkfgF_QvW.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (6);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> hugs ${after}**`)
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
    name: "hug",
    aliases: "none",
    usage: "``v.hug @User``",
    description: "Give someone a hug",
    accessebleby: "Members"
}