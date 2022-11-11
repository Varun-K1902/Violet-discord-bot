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
    let replies = ["https://media.tenor.com/images/a9b7c2903dc6ff07a4d6eb1a8e6ea129/tenor.gif", "https://media.tenor.com/images/b71ec0180c92456eba26880665ef2f9f/tenor.gif", "https://media.tenor.com/images/7476fb3f369d35a3a4f63552c97863c0/tenor.gif", "https://media.tenor.com/images/97835ac12828a701a55f486bfa39b193/tenor.gif", "https://media.tenor.com/images/e28e2b182e7dc6a60b1af189e20714fe/tenor.gif", "https://media.tenor.com/images/fe3ffccc5c8f3031d61c92bf4e24e2e5/tenor.gif", "https://media.tenor.com/images/9e8682b86a94cb6ce797ab0cb73a24fb/tenor.gif", "https://i.chzbgr.com/full/8579658496/hD770650B/at-times-when-you-enter-the-ca-section", "http://mrwgifs.com/wp-content/uploads/2016/01/Why-Are-Your-Thoughts-Always-So-Lewd-Nyarko-san-Another-Crawling-Chaos..gif", "https://i.imgur.com/izuhser.gif", "https://i.imgur.com/at1ZwDu.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> thinks lewd ${after}**`)
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
    name: "lewd",
    description: "Sends a lewd gif.",
    usage: "``v.lewd``",
    aliases: "none",
    accessableby: "Members"
}