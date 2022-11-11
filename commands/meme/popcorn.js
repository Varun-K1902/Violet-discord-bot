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
    let replies = ["https://media.giphy.com/media/12aW6JtfvUdcdO/giphy.gif", "https://media.giphy.com/media/a9gu5GIJGJ9du/giphy.gif", "https://media.giphy.com/media/pmpTiiqJlgccU/giphy.gif", "https://media.giphy.com/media/rY6oYt4OaF59C/giphy.gif", "https://media.giphy.com/media/tFK8urY6XHj2w/giphy.gif", "https://media.giphy.com/media/Sb7WSbjHFNIL6/giphy.gif", "https://media.giphy.com/media/RHiD0K65NxxLO/giphy.gif", "https://media.giphy.com/media/Pq31kHa0MDWuc/giphy.gif", "https://media.tenor.com/images/ddcdccd963f5a1a9cdadeb79151a9183/tenor.gif", "https://media.giphy.com/media/tFK8urY6XHj2w/giphy.gif", "http://www.reactiongifs.com/r/2012/11/tumblr_lq5mxuFBzR1qm6s2g1.gif", "http://www.reactiongifs.com/wp-content/uploads/2011/05/popcorn_2.gif", "https://thumbs.gfycat.com/LawfulBraveFerret-small.gif", "https://media.giphy.com/media/gl0mkIZOW6Nwc/giphy.gif"];
    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> grabs some popcorn**`)
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
    name: "popcorn",
    aliases: "none",
    usage: "``v.popcorn``",
    description: "Sends a popcorn eating gif",
    accessebleby: "Members"
}