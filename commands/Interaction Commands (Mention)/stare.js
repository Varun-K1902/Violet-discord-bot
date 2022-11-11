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
    let replies = ["https://cdn.zerotwo.dev/STARE/4b4f50ad-742e-455d-84ad-951a80b29f8f.gif", "https://cdn.zerotwo.dev/STARE/fb1ff340-c331-4c92-8fac-3a80e2015605.gif", "https://cdn.zerotwo.dev/STARE/902fe407-a393-4264-a632-df930c4455dc.gif", "https://cdn.zerotwo.dev/STARE/640da84d-eeed-4d7d-b533-66488890154b.gif", "https://cdn.weeb.sh/images/Bk12IJYvb.gif", "https://cdn.weeb.sh/images/BylM5Iktvb.jpeg", "https://cdn.weeb.sh/images/SkPoLJKwZ.gif", "https://cdn.weeb.sh/images/BknO81Kwb.gif", "https://cdn.weeb.sh/images/SyzsU1twZ.gif", "https://cdn.weeb.sh/images/rJZRDIJFw-.jpeg"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (8);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> stares ${after}**`)
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
    name: "stare",
    aliases: "none",
    usage: "``v.stare @User``",
    description: "Stare at someone",
    accessebleby: "Members"
}