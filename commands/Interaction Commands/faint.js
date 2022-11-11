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
    let replies = ["https://media.tenor.com/images/02f014b63d18b871bf20cd55cac55f80/tenor.gif", "https://media.tenor.com/images/229e36473fd7748d355a0a98db85e8bf/tenor.gif", "https://media.tenor.com/images/8ee66f28b941fadb756da36d214c2737/tenor.gif", "https://media.tenor.com/images/7d0c9b38338276d0dcfe6c49dfd424a0/tenor.gif", "https://media.tenor.com/images/0f510788527bf16ba3a5170c2f323916/tenor.gif", "https://media.tenor.com/images/505f3d17f921f7399dd886e422ee1c0b/tenor.gif", "https://media.tenor.com/images/38059c1772e32381317c83c5f1ec8de4/tenor.gif", "https://media.tenor.com/images/ba7ffcb3ecfdfb4c3726d8ac0b5c2e22/tenor.gif", "https://media.tenor.com/images/082fb0d05bc23dcd07d2e7c0e2318d64/tenor.gif", "https://i.kym-cdn.com/photos/images/newsfeed/001/387/912/c7b.gif", "https://thumbs.gfycat.com/LawfulGlisteningHammerheadshark-small.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> faints ${after}**`)
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
    name: "faint",
    description: "Sends a fainting gif.",
    usage: "``v.faint``",
    aliases: "none",
    accessableby: "Members"
}