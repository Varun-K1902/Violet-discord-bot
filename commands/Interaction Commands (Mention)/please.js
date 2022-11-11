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
    let replies = ["https://media.tenor.com/images/5b4bd2b2d3081a5aa704f21a303faa1e/tenor.gif", "https://media.tenor.com/images/51d1cad6bcd00ddd7761f39795a8aa86/tenor.gif", "https://media.tenor.com/images/b22f216c20548f5451fe1d9d1f93f483/tenor.gif", "https://media.tenor.com/images/6cba97389ba3ac706c0e40292ad59f3f/tenor.gif", "https://media.tenor.com/images/87dc418772e7be429c1cdabb6cb91a07/tenor.gif", "https://media.tenor.com/images/595b76147ce7b45cc01343d34fac467a/tenor.gif", "https://media.tenor.com/images/f1bf55d5bcf93d8a610f72854dfe1878/tenor.gif", "https://media.tenor.com/images/0af06f79e572d02d62f49dd1e0026b65/tenor.gif", "https://pa1.narvii.com/6231/c218c45c611c553f49143663bffe3eb80ba5c719_hq.gif", "https://gifimage.net/wp-content/uploads/2018/10/begging-anime-girl-gif-9.gif", "https://66.media.tumblr.com/tumblr_m80gmy89zW1rn95k2o1_500.gif", "https://66.media.tumblr.com/c4856e25d7e12ed057541ca3a1753b0f/tumblr_pqjnah9kgo1th206io1_250.gif"];

    let result = Math.floor((Math.random() * replies.length));
    let after = message.content.slice (9);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> pleads ${after}**`)
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
    name:"please",
    aliases: "beg",
    usage: "``v.please @User``",
    description: "plead someone.",
    accessableby: "Members"
}