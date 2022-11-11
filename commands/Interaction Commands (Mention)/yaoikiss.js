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
    let replies = ["https://media.tenor.com/images/3b703e04b2243deb9d6603600059f888/tenor.gif", "https://media.tenor.com/images/34f0d7c17f1d9fe5a6f9e28be057a023/tenor.gif", "https://media.tenor.com/images/77f6d2290f958c3396ea67c75c8479a9/tenor.gif", "https://media.tenor.com/images/4f186bc291e874b11ab74e2921f55d5a/tenor.gif", "https://media.tenor.com/images/eacae5d17d0a447d8e4d09e687b8b859/tenor.gif", "https://media.tenor.com/images/8113a46296c6fe8dff783ca515154fa2/tenor.gif", "https://media.tenor.com/images/b029cb44f93120dae945aedbfaaf54d3/tenor.gif", "https://media.tenor.com/images/c402b703b3597fd476f2448c18a8cea0/tenor.gif", "https://media.tenor.com/images/0f736491c124f411850e82d0d636f37d/tenor.gif", "https://media.tenor.com/images/b7c64e9702cca55c04b9d7fd3c50b929/tenor.gif", "https://media.tenor.com/images/298248335ace429aad0cf96a5aac5e94/tenor.gif", "https://media.tenor.com/images/2bb445bab60ef246cda9a99af80e1e49/tenor.gif", "https://media.tenor.com/images/c4a400e897cd10346dce562750f2d921/tenor.gif", "https://i.giphy.com/media/7z1xs4Fl9Kb8A/giphy.webp", "https://data.whicdn.com/images/212056054/original.gif", "https://i.pinimg.com/originals/91/0d/78/910d78a35c1e1157aa4e8bd75c18165e.gif", "https://media.tenor.com/images/705fabdf073777fd907c028c8a1b83e4/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (11);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> kisses ${after}**`)
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
    name: "yaoikiss",
    aliases: "none",
    usage: "``v.yaoikiss @User``",
    description: "Give someone a kiss with yaoi gif",
    accessebleby: "Members"
}