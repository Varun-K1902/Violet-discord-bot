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
    let replies = ["https://cdn.weeb.sh/images/HyPyUymsb.gif", "https://cdn.weeb.sh/images/HyjNLkXiZ.gif", "https://cdn.weeb.sh/images/SyQHUy7oW.gif", "https://cdn.weeb.sh/images/Byj7LJmiW.gif", "https://cdn.weeb.sh/images/rkPzIyQi-.gif", "https://cdn.weeb.sh/images/SyGQIk7i-.gif", "https://cdn.weeb.sh/images/SkmEI1mjb.gif", "https://cdn.weeb.sh/images/rybRByXjZ.gif", "https://cdn.weeb.sh/images/H1p0ByQo-.gif", "https://media.tenor.com/images/2e3bcdc3423c4b97dbdf2225fd3d6caf/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (9);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> tickles ${after}**`)
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
    name: "tickle",
    aliases: "none",
    usage: "``v.tickle @User``",
    description: "Give someone some tickles",
    accessebleby: "Members"
}