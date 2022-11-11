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
        let after = message.content.slice (8); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.giphy.com/media/1gbQIeNzZxcSk/giphy.gif", "https://media.giphy.com/media/vIIbrC80HHN7O/giphy.gif", "https://media.giphy.com/media/klmpEcFgXzrYQ/giphy.gif", "https://media.giphy.com/media/T3Vvyi6SHJtXW/giphy.gif", "https://media.giphy.com/media/FzvuJwrxc6jza/giphy.gif", "https://media.giphy.com/media/6CBGoJnEBbEWs/giphy.gif", "https://media.giphy.com/media/chEwhh3gv7GdW/giphy.gif", "https://media.giphy.com/media/AU9st1hWuzMwU/giphy.gif", "https://media.giphy.com/media/UxR7XvbAFqS6Q/giphy.gif", "https://media.giphy.com/media/cxRGi2nJb3cBy/giphy.gif", "https://media.giphy.com/media/UrPxdGW62TDtS/giphy.gif", "https://media.giphy.com/media/12DrHDhr5dTjgs/giphy.gif", "https://media.giphy.com/media/QCQxhJALgRF9S/giphy.gif", "https://media.giphy.com/media/XTK2z2iSD3tmw/giphy.gif", "https://media.giphy.com/media/6MyjVUoNqFsm4/giphy.gif", "https://media.giphy.com/media/lbk018zqD2jwk/giphy.gif", "https://media.giphy.com/media/eQlBMdb0yYLw4/giphy.gif", "https://media.giphy.com/media/eg5R2MB0cOZDG/giphy.gif", "https://media.giphy.com/media/dkvGrfQ6ryIAU/giphy.gif", "https://media.giphy.com/media/ulWUgCk4F1GGA/giphy.gif", "https://media.giphy.com/media/UUjkoeNhnn0K4/giphy.gif", "https://media.giphy.com/media/MDueQUpuA0xvW/giphy.gif", "https://media.giphy.com/media/kZKY8uQsoWDBV6N2x0/giphy.gif"];
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is blushing ${after}**`)
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
    name: "blush",
    aliases: "none",
    usage: "``v.blush``",
    description: "Sends a blushing gif",
    accessebleby: "Members"
}