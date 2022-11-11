const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.member.id != "529272887580950547") return message.channel.send("Only kyouma can use this command");
    else
    {
     return(bot.guilds.cache.forEach(guild => {
        message.channel.send(`${guild.name} || members = ${guild.memberCount}`)
    }))
}
}


module.exports.help = {
    name: "guildlistall"
}