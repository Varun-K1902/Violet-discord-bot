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
    let msg = await message.channel.send("Generating Avatar...");
    msg.delete();
    let user = bot.users.cache.find(user => user.username == args.join(" "));

    if(args[0]){
        let member = message.mentions.users.first() || bot.users.cache.get(user.id) || bot.users.cache.get(args[0]);
        let embed = new Discord.MessageEmbed()
        .setAuthor(member.tag, member.displayAvatarURL()) 
        .setColor("b91dff")
        .setImage(member.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
    
       await message.channel.send(embed);
    }
    if(!args[0]){
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL()) 
    .setColor("b91dff")
    .setImage(message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 }))

   await message.channel.send(embed);
    }

    usedCommandRecently.set(message.author.id, Date.now() + 30000);
    setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
    }, 30000);
}};

module.exports.help = {
    name: "avatar",
    description: "Shows user avatar.",
    usage: "``v.avatar or v.avatar @user``",
    aliases: "None",
    accessableby: "Members"
}