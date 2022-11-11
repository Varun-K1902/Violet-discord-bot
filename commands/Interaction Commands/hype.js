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
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/6cbcf523bf357411ff874e288239d073/tenor.gif", "https://media.tenor.com/images/c7b7edb57633c88bd9917dc297d1eb7a/tenor.gif", "https://media.tenor.com/images/cccb2620ca3e73365952fbd35bf55b77/tenor.gif", "https://media.tenor.com/images/8015e98428100e8d13be6fb62ab0bf4d/tenor.gif", "https://media.tenor.com/images/0a51bf2f906410e8bde489c1bc7c6061/tenor.gif", "https://media.tenor.com/images/294dc2b3d2fa0d8ad87dc8ef89d254e0/tenor.gif", "https://media.tenor.com/images/907316fcdfe4c7875f20353b4d932f87/tenor.gif", "https://media.tenor.com/images/d69cd0bad6f6edd8a11d2ccea4f22384/tenor.gif", "https://media.tenor.com/images/681be4e788263e7998e6ee578199ef49/tenor.gif", "https://media.tenor.com/images/c2c69b07c7132068a108542957147658/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is hyped ${after}**`)
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
    name: "hype",
    description: "Sends an hype gif.",
    usage: "``v.hype``",
    aliases: "none",
    accessableby: "Members"
}