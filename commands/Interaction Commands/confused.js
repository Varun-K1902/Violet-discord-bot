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
        let after = message.content.slice (11); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.giphy.com/media/zgGrSqSi3SSqs/giphy.gif", "https://media.giphy.com/media/Y4vg6chFftvP2/giphy.gif", "https://media.giphy.com/media/fmXgCpO3IhesE/giphy.gif", "https://media.giphy.com/media/i0QxELpBECp4Q/giphy.gif", "https://media.giphy.com/media/tkJu9E7HbrAC4/giphy.gif", "https://media.giphy.com/media/CFpxc7SmOm7C0/giphy.gif", "https://media.giphy.com/media/xT0BKmtQGLbumr5RCM/giphy.gif", "https://media.tenor.com/images/b0123ae80781b3ca807c8c21101415bd/tenor.gif", "https://media.tenor.com/images/9a31b03fa3af17f5c4cfab4900d0b560/tenor.gif", "https://media.tenor.com/images/fa93d52d6f767bbab36dc88ebe86b0fc/tenor.gif", "https://media.tenor.com/images/a1f120ad205fe365ee92fe3ecb724755/tenor.gif", "https://media.tenor.com/images/d0f0bc773dfc096280b6cf32ed654794/tenor.gif", "https://media.tenor.com/images/10eb0ae09d8954bcc0a54c084d23e5fe/tenor.gif", "https://media.tenor.com/images/6d1e0460bc4032cd5b652c098a3ba335/tenor.gif", "https://media.tenor.com/images/2e4c1066bcea144a5956ea4bebe0c0a2/tenor.gif", "https://media.tenor.com/images/3557b2a1996c1e9c27cd090b4f8554fd/tenor.gif", "https://media.tenor.com/images/43b49d51c6fa24edd62752fc641086f3/tenor.gif", "https://media.tenor.com/images/806dc6cf5fa0c2a970418c76d089f7dd/tenor.gif", "https://media.tenor.com/images/2ccdc091537376315de55b57056c5a13/tenor.gif", "https://media.tenor.com/images/27bcacd5115ddc0aacf61202e813e7ff/tenor.gif", "https://media.tenor.com/images/9a0277878976fda4c62bc807c05aed04/tenor.gif", "https://media.tenor.com/images/d52163168d432a1558c346ec6a0f7af9/tenor.gif", "https://media.tenor.com/images/5053c690f0511c194c012e67166905fe/tenor.gif", "https://media.tenor.com/images/ae2c2afebaaeb85742d0549f33d1f30c/tenor.gif", "https://media.tenor.com/images/78d644c1c4b228056adc2779ecdbb8a1/tenor.gif", "https://media.tenor.com/images/556fafaa05a74f72b85b2c7c860bf37b/tenor.gif", "https://media.tenor.com/images/bb7ab72a292a92322c3f4ab86bbbe8c5/tenor.gif", "https://media.tenor.com/images/7280b2b8d04379aa8cf81562ea766681/tenor.gif"];
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is confused ${after}**`)
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
    name: "confused",
    aliases: "none",
    usage: "``v.confused``",
    description: "Sends a confused gif",
    accessebleby: "Members"
}