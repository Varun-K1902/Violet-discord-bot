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
    let replies = ["https://media.tenor.com/images/5f199a951a552d83e49c275d7505c2e6/tenor.gif", "https://cdn.zerotwo.dev/KISS/8b7dbe1a-ad13-48bf-9142-a9db21748f12.gif", "https://cdn.zerotwo.dev/KISS/1a43ff80-a5ca-4e78-929b-09714a51b557.gif", "https://cdn.zerotwo.dev/KISS/ecba70af-7f81-4541-ab00-f44b5c05c14f.gif", "https://cdn.zerotwo.dev/KISS/c00a93c6-39ed-4ef1-af7d-1c4a5642e9f5.gif", "https://cdn.zerotwo.dev/KISS/2e13b404-07b2-475d-9328-7ca95fe57bfc.gif", "https://cdn.zerotwo.dev/KISS/ee641825-6293-444a-ace3-2613a2716977.gif", "https://cdn.zerotwo.dev/KISS/c769d606-869d-48c7-8fc7-a531010bcb27.gif", "https://cdn.zerotwo.dev/KISS/38c7fa03-f800-463d-ac01-7ad7f70e29e6.gif", "https://cdn.zerotwo.dev/KISS/dd2bacdb-aece-4c7a-8a6c-4c39af195411.gif", "https://cdn.zerotwo.dev/KISS/0b01b8a6-d0e0-4d9a-ae94-9dfb2f7f2f12.gif", "https://cdn.zerotwo.dev/KISS/1afe24ba-5014-4ddd-9222-5969076e9de3.gif", "https://cdn.weeb.sh/images/HJkxXNtjZ.gif", "https://cdn.weeb.sh/images/BJLP3a_Pb.gif", "https://cdn.weeb.sh/images/S1E1npuvb.gif", "https://cdn.weeb.sh/images/BJv0o6uDZ.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
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
    name: "kiss",
    aliases: "none",
    usage: "``v.kiss @User``",
    description: "Give someone a kiss",
    accessebleby: "Members"
}