const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "529272887580950547") { message.channel.send("Only kyouma can use this command");
    return; 
    }
    else
    {
     return(bot.guilds.cache.forEach(guild => {
         if(guild.id === "710003016614281276")return;
         if(guild.memberCount > args[0])return;
        message.channel.send(` left ${guild.name} | members = ${guild.memberCount} | guildID = ${guild.id}`)
        guild.leave();
    }))
}
}


module.exports.help = {
    name: "guildleft"
}