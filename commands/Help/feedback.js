const Discord = module.require("discord.js");
const bot = new Discord.Client({disableEveryone: true})


module.exports.run = async (bot, message, args) => {
    let feedback = args.slice(0).join(" ");
    if(!feedback){
        message.reply("Pls write something to feedback");
        return;
    }
    let feedbackembed = new Discord.MessageEmbed()
    .setColor("b91dff")
    .setAuthor(`New Feedback`, message.author.displayAvatarURL())
    .setDescription(feedback)
    .addField(`Feedback from:`, message.author.username)
    .addField(`Guild Name:`, message.guild.name)
    .addField(`Guild Members:`, message.guild.memberCount)


let feedchan = bot.channels.cache.get(`718722000603840552`);
if(feedchan)
message.reply("Your feedback sent")
.then(msg => { 
    msg.delete({ timeout: 3000 })});
feedchan.send(feedbackembed);
}
module.exports.help = {
    name: "feedback",
    description: "Give feedback about violet.",
    usage: "``v.feedback <your-feedback>``",
    aliases: "none",
    accessableby: "Members"
}