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
        let after = message.content.slice (6); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/be0a79135be983a4b665686e7526d822/tenor.gif", "https://media.tenor.com/images/8a2a2ade2b814a14f836fdef09175608/tenor.gif", "https://media.tenor.com/images/0166e8c0411943d194c0ac4d5bd2be26/tenor.gif", "https://media.tenor.com/images/72c384cd271aab8a421754a0ab5e42aa/tenor.gif", "https://media.tenor.com/images/577860c5bceb9f4e9bd52d23b59945d1/tenor.gif", "https://media.tenor.com/images/0e69baa7f67a77ddc5598baa3c8ab930/tenor.gif", "https://media.tenor.com/images/54d8c4265564b21342a76c76172d15ab/tenor.gif", "https://cdn.zerotwo.dev/SHY/139a2f7d-a381-48ef-8e56-fa01eecf1301.gif", "https://cdn.zerotwo.dev/SHY/3f5b54ee-e054-49bd-9d78-78aa1999f130.gif", "https://cdn.zerotwo.dev/SHY/a52804c3-74c8-4263-a722-18ed68fa2a9e.gif", "https://cdn.zerotwo.dev/SHY/747bfa31-8afb-47ae-b91c-ea1083e934a3.gif", "https://cdn.zerotwo.dev/SHY/d74c0e5c-50c5-43a7-a947-5ed02f0e5fc4.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> is shy ${after}**`)
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
    name: "shy",
    description: "Sends a shy gif.",
    usage: "``v.shy``",
    aliases: "none",
    accessableby: "Members"
}