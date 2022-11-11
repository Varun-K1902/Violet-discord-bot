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
    let replies = ["https://media.tenor.com/images/77a69de9e25cff4ac70c22951f238a3a/tenor.gif", "https://media.tenor.com/images/70a5ee2a92838d2f53f1aeff0981313c/tenor.gif", "https://pa1.narvii.com/6548/777e0df646cd4a7db2f14a0397914390998b8306_hq.gif", "https://media1.tenor.com/images/bcfb62cf67e6ab548df93b466cd6fefe/tenor.gif?itemid=9469686", "https://i1.wp.com/25.media.tumblr.com/tumblr_m2l3r4XCwE1rqxa7po1_500.gif?w=780", "https://media.giphy.com/media/12zZyUdEKSg4uc/giphy.gif", "https://i.makeagif.com/media/10-08-2014/M7fTut.gif", "https://ohmy.disney.com/wp-content/uploads/2015/11/Kuzco-Entrance.gif", "https://media.giphy.com/media/KjwwkITlXihag/giphy.gif", "https://media.tenor.com/images/9279b04d7ae17e0c95aacde3f7dbdca3/tenor.gif", "https://media.tenor.com/images/a165652e1f59d3a80f65d7f1731ba009/tenor.gif", "https://media.tenor.com/images/87356d68f7ae874568a78865a1589e07/tenor.gif", "https://media.tenor.com/images/8584037945889bd08b616ebc2c46ab17/tenor.gif", "https://media.tenor.com/images/27204540958f0aa57f6bd59d3cbdaed6/tenor.gif", "https://media.tenor.com/images/d202ab0001fc044e8408bcc4193dedf0/tenor.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> enters the chat ${after}**`)
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
    name: "enter",
    description: "Sends an entrance gif.",
    usage: "``v.enter``",
    aliases: "none",
    accessableby: "Members"
}