const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.member.id != "529272887580950547") return message.channel.send("You can't use this command");
 let guild = bot.guilds.cache.get(args[0])
 let em = new Discord.MessageEmbed()
 .setTitle(`${guild.name}`)
    .addField(`Guild Owner:`,guild.owner.user.tag)
    .addField(`Guild ID:`, guild.id)
    .addField(`Guild Members:`, `${guild.memberCount - guild.members.cache.filter(m=>m.user.bot).size} (${guild.members.cache.filter(m=>m.user.bot).size} bots)`, true)
    .setThumbnail(guild.iconURL())
    .setColor("b91dff")
        
    message.channel.send(em);
}



module.exports.help = {
    name: "guildinfo"
}