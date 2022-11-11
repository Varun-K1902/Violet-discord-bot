const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.member.id != "529272887580950547") return message.channel.send("Only kyouma can use this command");
    else
    {
     return(bot.guilds.cache.forEach(guild => {
         if(guild.memberCount > args[0])return;
         if(guild.memberCount < args[1])return;
        message.channel.send(`${guild.name} | members = ${guild.memberCount} | guildID = ${guild.id}`)
    }))
}
}


module.exports.help = {
    name: "guildlist"
}