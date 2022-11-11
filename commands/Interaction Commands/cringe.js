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
        let after = message.content.slice (9); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://media.tenor.com/images/afac531ed5efdae0e36275e9363ac85f/tenor.gif", "https://media.tenor.com/images/350f4d9cfbe5558b279be3f435dea0c0/tenor.gif", "https://media.tenor.com/images/a43a9d9617027a3296ff4aff5ef1c65a/tenor.gif", "https://media.tenor.com/images/8c026dfaad98e4ec9f2fb3e30224114a/tenor.gif", "https://thumbs.gfycat.com/MajorRadiantEmperorshrimp-size_restricted.gif", "https://cdn.discordapp.com/attachments/713066357679456346/715918156404621372/OK6W_koKDTOqqqLDbIoPAmD_PPKJKnXyE5Piul9d9-Q.gif", "https://cdn.discordapp.com/attachments/713066357679456346/715919001653477446/ueRS3W4eVdEzb4WVsqz9N9764yiEC7OL2PIWZO6ddq7epAtdaezUWAArwKS5PgsCFTHdTY6cLUFfTZAXvBRu2A1pOblissZyJOjo.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> cringed ${after}**`)
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
    name: "cringe",
    description: "Sends a cringe gif.",
    usage: "``v.cringe``",
    aliases: "none",
    accessableby: "Members"
}