const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.author.send("Join my support server\n https://discord.gg/kHrVCcm")

};
module.exports.help = {
    name: "support",
    description: "Dms you the invite to the bot's support server.",
    usage: "``v.support``",
    aliases: "none",
    accessableby: "Members"
}