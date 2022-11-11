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
    let replies = ["https://media.tenor.com/images/2d010e4d537648a8af03b006e6a3fdd9/tenor.gif", "https://media.tenor.com/images/696dd71c10931551ab8df45094d31ab7/tenor.gif", "https://media.tenor.com/images/9df5ed519421338371d37a758974ca06/tenor.gif", "https://media.tenor.com/images/a23be5d881247f81082cdbdabc69253a/tenor.gif", "https://media.tenor.com/images/85d05ad32e1c6896f00b1d6618d9ef3b/tenor.gif", "https://media.tenor.com/images/3c625eef9800c95821cd407dcfa14aa8/tenor.gif", "https://media.tenor.com/images/af2683bd6361e05c2d04478aca740cd5/tenor.gif", "https://media.tenor.com/images/dbf90015f05d5b5d0d5893529e5d7724/tenor.gif", "https://media.tenor.com/images/7453951469280a7b39290967cfabfed0/tenor.gif", "https://media.tenor.com/images/46a74ce6228e7bc535263e1464cce46b/tenor.gif", "https://media.tenor.com/images/e145bc549c10e7ca4b50fcadc20e6d7b/tenor.gif", "https://media.tenor.com/images/d9c7af16f2eeb8fc43cb0d3f65267fd5/tenor.gif", "https://media.tenor.com/images/f778803a957048aa0a704f170faf73a9/tenor.gif", "https://media.tenor.com/images/23fa301857c16aee118fe84b6721ee06/tenor.gif", "https://media.tenor.com/images/0a2076d50dd9e8330dfb823646254ed1/tenor.gif", "https://media.tenor.com/images/c9717f8e0569ed33ce891f020a217106/tenor.gif", "https://media.tenor.com/images/e5a2522a74bafc8be859ebe1f292f970/tenor.gif", "https://media.tenor.com/images/907a4092ad9ea64b14aced3f3b6750cc/tenor.gif", "https://media.tenor.com/images/41f2cee5d6722e3e4eb4515aa0bca8a3/tenor.gif"];
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is bored ${after}**`)
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
    name: "bored",
    aliases: "none",
    usage: "``v.bored``",
    description: "Sends a bored gif",
    accessebleby: "Members"
}