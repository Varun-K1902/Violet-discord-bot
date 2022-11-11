const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const {ReactionCollector} = require('discord.js-collector');
 

    const botMessage = await message.channel.send('gtn')
ReactionCollector.paginator({
    botMessage,
    user: message,
    pages: [
        new Discord.MessageEmbed()
        .setTitle("Guess the Number Help")
.setColor("b91dff")
.setDescription("**-v.gtnstart <#channel> <lowerlimit> <upperlimit> <correct-number>**\nExample: ``v.gtnstart #channel 1 1000 535``\n```Starts a new guess the number event in the mentioned channel```\n**-gtnend**\n```Ends an ongoing guess the number event```")
.addField("**Note**", "-Bot must have ``MANAGE_CHANNEL`` Perms to lock or unlock the mentioned channel"),
new Discord.MessageEmbed()
.setColor("b91dff")
.setTitle("Guess the Number Information")
.setDescription("-On using v.gtnstart command, violet will unlock the mentioned channel(if locked) and posts a start message in that channel.\n\n-Only the person who started the event can end it (without any winner) by typing ``gtnend``(without prefix) in the event channel.\n\n-Violet will send an end message to the event channel if the event has ended or when the correct number is guessed and then locks the event channel")
.setImage('https://i.imgur.com/FUUTocZ.gif')
]
});
}
module.exports.help = {
    name: "gtn",
    description: "sends you the information about guess the number commands",
    usage: "``v.gtn``",
    aliases: "none",
  accessableby: "Members"
}