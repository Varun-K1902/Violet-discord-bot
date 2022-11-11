const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.member.id != "529272887580950547") return message.channel.send("You can't use this command");
    else
    {
        let botguild = args[0];
        bot.guilds.cache.get(botguild).leave()
        .then(g => message.channel.send("Left guild successfully")) 
      
    }    
    };
module.exports.help = {
  name: "guildleave"
}