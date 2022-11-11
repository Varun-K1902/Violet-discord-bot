const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`You need to have **MANAGE_MESSAGES** to use this command`)
    .then(msg => {
        msg.delete({ timeout: 5000 })
    })
    const msg = bot.snipes.get(message.channel.id);
    if (!msg) return message.reply("There is nothing to snipe!");

    const embed = new MessageEmbed()
    .setAuthor(`By ${msg.author.tag}`, msg.author.displayAvatarURL())
    .setColor("b91dff")
    .setTimestamp();

    if(msg.content) embed.setDescription(msg.content)
    if (msg.image) embed.setImage(msg.image);

    message.channel.send(embed);
}

module.exports.help = {
    name: "snipe",
    description: "Shows the last deleted message or image.",
    usage: "``v.snipe``",
    aliases: "none",
    accessableby: "Members who have MANAGE_MESSAGES Perms"
}