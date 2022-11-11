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
        let after = message.content.slice (5); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/64240f523db0daa78b45b165fea32356/tenor.gif", "https://media.tenor.com/images/caabc706ff7e27e00fb395ca8b3fab60/tenor.gif", "https://media.tenor.com/images/642707f549734e92e573f9e4b3e3ee1a/tenor.gif", "https://media.tenor.com/images/662342abb63c4417d139cd56c850d08a/tenor.gif", "https://media.tenor.com/images/40b882720a1c27bb3c1525263b215db2/tenor.gif", "https://media.tenor.com/images/ce47693ad78a1591a627524a0ed0c199/tenor.gif", "https://media.tenor.com/images/599b91a5eae0348d7eff2f82a95f889e/tenor.gif", "https://media.tenor.com/images/e7a7903a3d3f315f1453c67c20d614c6/tenor.gif", "https://media.tenor.com/images/2f5f7b0a912137799c293053df69fc39/tenor.gif", "https://media.tenor.com/images/e24a416b1833a7be1dba8ef1e897e91a/tenor.gif", "https://media.tenor.com/images/3743d0ba6a9270627e95a7a21c9071d7/tenor.gif", "https://media.tenor.com/images/7c136f30f21c13113ee837d26053e409/tenor.gif", "https://media.tenor.com/images/71a9e67a2b51c8d3c4342c985c565169/tenor.gif", "https://i.kym-cdn.com/photos/images/original/001/071/681/a44.gif", "https://3.bp.blogspot.com/-1NdrGuRvmCU/Vx7f7g0i3cI/AAAAAAAAAFI/tpYxQex_7gUZT90JDQi4KuglBWhXGq46QCKgB/s1600/Thank%2Byou%2Bvery%2Bmuch%2521.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} expresses their gratitude`)
    .setDescription(`**<@${message.author.id}> says thank you ${after}**`)
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
    name: "ty",
    description: "Sends a thank you gif.",
    usage: "``v.ty``",
    aliases: "thankyou",
    accessableby: "Members"
}