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
    let replies = ["https://cdn.zerotwo.dev/PURR/9fa99060-e70f-4518-b566-03d0c107e2d7.gif", "https://cdn.zerotwo.dev/PURR/e99e582a-d9db-46ba-97f4-d879f62b64ac.gif", "https://cdn.zerotwo.dev/PURR/15255b2a-d488-455d-8942-85d408367009.gif", "https://cdn.zerotwo.dev/PURR/4368e66d-abff-4a06-b917-362aa34cdf31.gif", "https://cdn.zerotwo.dev/PURR/90619a55-2554-4399-acef-57ea0e4e887d.gif", "https://cdn.zerotwo.dev/PURR/11b72808-701f-457a-97f3-9ceafd5c45ba.gif", "https://cdn.zerotwo.dev/PURR/65f2fb04-a33e-47db-8094-d79ad276f6e2.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> purrs ${after}**`)
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
    name: "purr",
    aliases: "none",
    usage: "``v.purr @User``",
    description: "Purr at someone",
    accessebleby: "Members"
}