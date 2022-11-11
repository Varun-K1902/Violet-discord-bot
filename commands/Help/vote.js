const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Please support me by voting for me\nhttps://top.gg/bot/690106747536539668/vote")

};
module.exports.help = {
    name: "vote",
    description: "Upvote the bot on top.gg.",
    usage: "``v.vote``",
    aliases: "none",
    accessableby: "Members"
}