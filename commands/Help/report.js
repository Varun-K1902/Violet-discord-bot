const Discord = module.require("discord.js");
const bot = new Discord.Client({disableEveryone: true})


module.exports.run = async (bot, message, args) => {
    let report = args.slice(0).join(" ");
    if(!report){
        message.reply("Pls write something to report");
        return;
    }
    let reportembed = new Discord.MessageEmbed()
    .setColor("b91dff")
    .setAuthor(`New Report`, message.author.displayAvatarURL())
    .setDescription(report)
    .addField(`Reported by:`, message.author.username)
    .addField(`Guild Name:`, message.guild.name)
    .addField(`Guild Members:`, message.guild.memberCount)


let reportchan = bot.channels.cache.get(`718722047362072677`);
if(reportchan)
message.reply("Your report sent")
.then(msg => { 
    msg.delete({ timeout: 3000 })});
reportchan.send(reportembed);
}
module.exports.help = {
    name: "report",
    description: "Report something to the bot owner.",
    usage: "``v.feedback <your-report>``",
    aliases: "none",
    accessableby: "Members"
}