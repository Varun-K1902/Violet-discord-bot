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
    let replies = ["https://cdn.zerotwo.dev/SLAP/7c5490f6-7f70-494b-8f84-73c1c9aee03a.gif", "https://cdn.zerotwo.dev/SLAP/8033a02c-b983-4cec-bbb7-e57c0361103b.gif", "https://cdn.zerotwo.dev/SLAP/ee77ff1d-325b-4495-950b-b29978aa8c92.gif", "https://cdn.zerotwo.dev/SLAP/cf972400-4ce4-4a3a-8fbf-33d1bc5f142f.gif", "https://cdn.zerotwo.dev/SLAP/9be3ae42-362a-42cb-a340-7bb73de67ff8.gif", "https://cdn.zerotwo.dev/SLAP/4832c8f0-90a3-4fe5-84a9-aa46ae079796.gif", "https://cdn.weeb.sh/images/BkxEo7ytDb.gif", "https://cdn.weeb.sh/images/SkNimyKvZ.gif", "https://cdn.weeb.sh/images/BkzyEktv-.gif", "https://cdn.weeb.sh/images/Hkw1VkYP-.gif", "https://cdn.weeb.sh/images/SJx7M0Ft-.gif", "https://cdn.weeb.sh/images/rkaqm1twZ.gif", "https://cdn.weeb.sh/images/SkxGcmJKPb.gif", "https://media.tenor.com/images/47a6be1fbc1c40c3a55c0e2c8b725603/tenor.gif", "https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif", "https://media.tenor.com/images/0e0075470c85f0546e0d0450455e77e8/tenor.gif", "https://tenor.com/bcipS.gif"
];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (7);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> slaps ${after}**`)
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
    name: "slap",
    aliases: "none",
    usage: "``v.slap @User``",
    description: "Slap someone",
    accessebleby: "Members"
}