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
    let replies = ["https://cdn.zerotwo.dev/PUNCH/012705bc-273f-4c56-9184-d1439879d2f6.gif", "https://cdn.zerotwo.dev/PUNCH/38a3ab62-17f4-4682-873a-121e886d7bce.gif", "https://cdn.zerotwo.dev/PUNCH/b598cde0-b9e5-402d-b812-0fea4db5c504.gif", "https://cdn.zerotwo.dev/PUNCH/2bc5bde1-4d21-4bc5-9741-6fd7ef746799.gif", "https://cdn.zerotwo.dev/PUNCH/8405ceed-4885-484f-a383-370940fcd33d.gif", "https://cdn.zerotwo.dev/PUNCH/5b8db0aa-b7b3-4314-bd17-090fe9b61358.gif", "https://cdn.weeb.sh/images/SJR-PpZbM.gif", "https://cdn.weeb.sh/images/rJRUk2PLz.gif", "https://cdn.weeb.sh/images/HJqSvaZ-f.gif", "https://cdn.weeb.sh/images/B1rZP6b-z.gif", "https://cdn.weeb.sh/images/SJvGvT-bf.gif", "https://cdn.weeb.sh/images/ByI7vTb-G.gif", "https://cdn.weeb.sh/images/B1-ND6WWM.gif", "https://media.tenor.com/images/f7b498a905f3e8c964ad5d97bf176e1f/tenor.gif", "https://media.tenor.com/images/b96f63d9382fe52cfe43feac4a8a40d6/tenor.gif", "https://media.tenor.com/images/b11c79cf158d8c9bd6e721676b06ad73/tenor.gif", "https://media.tenor.com/images/04f62b7819a22210c0ba411ddb2636a5/tenor.gif", "https://media.tenor.com/images/1175cdf430e96e475d39777bced6798d/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (8);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> punches ${after}**`)
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
    name: "punch",
    aliases: "none",
    usage: "``v.punch @User``",
    description: "Gime someone a punch",
    accessebleby: "Members"
}