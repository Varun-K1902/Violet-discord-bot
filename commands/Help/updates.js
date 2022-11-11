const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const rm = require('discord.js-reaction-menu');
    new rm.menu(message.channel, message.author.id, [new Discord.MessageEmbed()
        .setColor("b91dff")
        .setAuthor(`Violet Bot Updates`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
        .setDescription("➝ Added **hype, stfu, faint** interaction commands.\n➝ Changed **EXTRA** category to **MEME** category.\n➝ Added some new commands to **MEME** category.\n➝ Added a new feature where you can use any command with capitals\nExample: ``v.pat`` or ``v.PAT``")
        .setFooter("Update 1.0.6"),
        new Discord.MessageEmbed()
        .setColor("b91dff")
        .setAuthor(`Violet Bot Updates`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
        .setDescription("➝ Deleted **dancewith, laughat, poutat, runwith, runaway, smileat, winkat** interaction commands.\n➝ changed the layout of interaction commands.\n➝ Added **evillaugh, nervous, thankyou(ty), enter, dab, cringe, happybday, hungry, annoyed, flirt, beg (or please), boop, flex, ouch, lewd** interaction commands.\n➝ changed help command.")
        .setFooter("Update 1.0.5"),
            new Discord.MessageEmbed()
        .setColor("b91dff")
        .setAuthor(`Violet Bot Updates`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
        .setDescription("**➝  v.yeahbwoi** sends an ains yeah bwoi gif.\n**➝  v.noice** sends a noice gif.\n**➝  v.gl** or **v.goodluck** wish someone good luck.\n➝ **v.sigh** sends a sigh gif\n➝ **v.wave** sends a wave gif\n➝ removed giveaway command.\n➝  added v.updates to check violet's latest updates.")
        .setFooter("Update 1.0.4"),
                new Discord.MessageEmbed()
        .setColor("b91dff")
        .setAuthor(`Violet Bot Updates`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
        .setDescription("**➝  v.autodelete** autodeletes msgs sent in a channel.\n**➝  v.gtn** Guess The Number.\n**➝  v.banghead** interaction command.\n**➝  Updated cooldown for commands.**")
        .setFooter("Update 1.0.3"),
                new Discord.MessageEmbed()
                .setColor("b91dff")
                .setAuthor(`Violet Bot Updates`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
                .setDescription("**➝  v.suggest** to suggest something.\n**➝  v.feedback** to give feedback.\n**➝  v.report** to report something.\n**➝  v.ily** confess your love to someone.\n**➝  v.save** save someone.")
                .setFooter("Update 1.0.2"),
                new Discord.MessageEmbed()
                .setAuthor(`Violet Bot Updates`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
        .setColor("b91dff")
        .setDescription("**➝  v.vote** to vote for the bot.\n**➝  v.yaoikiss** kiss someone with yaoi gif\n**➝  v.yurikiss** kiss somone with yuri gif.")
        .setFooter("update 1.0.1")]);
}
module.exports.help = {
    name: "updates",
    description: "Sends you the information about violet's latest updates.",
    usage: "``v.updates``",
    aliases: "none",
    accessableby: "Members"
  }