const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.author.send(new Discord.MessageEmbed()
    .setColor("b91dff")
    .setAuthor("Cooldown", "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
     .setDescription("•The cooldown time for Interaction category is 10 seconds.\n •The cooldown time for avatar command is 30 seconds.")
    

    )};
module.exports.help = {
    name: "cooldown",
    description: "Shows cooldown time for commands.",
    usage: "``v.cooldown``",
    aliases: "none",
    accessableby: "Members"
}