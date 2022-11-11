const Discord = module.require("discord.js");
const bot = new Discord.Client({disableEveryone: true})


module.exports.run = async (bot, message, args) => {
    let suggestion = args.slice(0).join(" ");
    if(!suggestion){
        message.reply("Pls suggest something");
        return;
    }
    let suggestembed = new Discord.MessageEmbed()
    .setColor("b91dff")
    .setAuthor(`New Suggestion`, message.author.displayAvatarURL())
    .setDescription(suggestion)
    .addField(`Suggested by:`, message.author.username)
    .addField(`Guild Name:`, message.guild.name)
    .addField(`Guild Members:`, message.guild.memberCount)


let chan = bot.channels.cache.get(`718721972581957712`);
if(chan)
message.reply("Suggestion sent")
.then(msg => { 
    msg.delete({ timeout: 3000 })});
chan.send(suggestembed);
}
module.exports.help = {
    name: "suggest",
    description: "Suggest something to the bot owner.",
    usage: "``v.suggest <suggestion>``",
    aliases: "none",
    accessableby: "Members"
}