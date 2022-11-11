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
    let member = message.mentions.users.first();
    let replies = ["https://media.tenor.com/images/c46116b9116e1baa24e96fa6c5a78818/tenor.gif", "https://media.tenor.com/images/8bf3b4bec5055537dda92d86d16ea5bd/tenor.gif", "https://media.tenor.com/images/9945480efe5179c227558769613ee275/tenor.gif", "https://media.tenor.com/images/7daa05171e41b86ce216ead73085cea8/tenor.gif", "https://media.tenor.com/images/a02506bf918679cd3a4658dd09632341/tenor.gif", "https://media.tenor.com/images/ff69974ac6a5ffa9a4ab8a59a522d04e/tenor.gif", "https://media.tenor.com/images/19d211f08c7509f629cd9e18b027c5a9/tenor.gif", "https://media.tenor.com/images/3b849449f34e2b7f280a4edc127a1162/tenor.gif", "https://media.tenor.com/images/8e308011ca03f90dd2000411d40520a0/tenor.gif", "https://media.tenor.com/images/6b5c1554a6ee9d48ab0392603bab8a8e/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> boops ${after}**`)
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
    name: "boop",
    aliases: "none",
    usage: "``v.boop @User``",
    description: "boop someone.",
    accessableby: "Members"
}