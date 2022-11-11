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
        let after = message.content.slice (12); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/1f9ea0eb2eb6c34a87e4facd91bae4b7/tenor.gif", "https://media.tenor.com/images/ebe64ed6d2e486592abf31d93aca7876/tenor.gif", "https://media.tenor.com/images/09bbf52e0c33872853a3afe18ea798db/tenor.gif", "https://media.tenor.com/images/5740fb99fbac9ccbdad88a331e8c5a6e/tenor.gif", "https://media.tenor.com/images/19ddbaa82cf97e584855deb0a8991fe4/tenor.gif", "https://media.tenor.com/images/3049418f7e5c007eb9f56f8cc5ab3535/tenor.gif", "https://media.tenor.com/images/c3666d22cd128ada13a7722096125bcb/tenor.gif", "https://media.tenor.com/images/947222fb99cd972f31786e810495f549/tenor.gif", "https://media.tenor.com/images/46e64bbc7a0001d4dbbe7df2543a26b9/tenor.gif", "https://media.tenor.com/images/b94a99f5c4f5e24f23f8f19d27b35e45/tenor.gif", "https://media.tenor.com/images/6f8d2c41ef79066887f88a6cb87593d7/tenor.gif", "https://media.tenor.com/images/0457d25949739701ae9ef69b3d347fd6/tenor.gif", "https://media.tenor.com/images/de64ac500e9467c7a43ec8d685c05939/tenor.gif", "https://media.tenor.com/images/70cbe7d43ee24cfec1218051972a3f90/tenor.gif", "https://media.tenor.com/images/e1061bc396d6feb82f06b68d752caa44/tenor.gif", "https://66.media.tumblr.com/6dbf7e352db3460ed4477c1635157997/tumblr_mmwj2mcxeh1r1ik9ro1_500.gif", "https://66.media.tumblr.com/80764ac73a432cf7ff2c72c140d54b7d/835e87394863c497-03/s640x960/d1019a52dc8dc7e9625018baa647b9b714ef003a.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} is planning something devious`)
    .setDescription(`**<@${message.author.id}> is laughing ${after}**`)
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
    name: "evillaugh",
    description: "Sends an evil laugh gif.",
    usage: "``v.evillaugh``",
    aliases: "none",
    accessableby: "Members"
}