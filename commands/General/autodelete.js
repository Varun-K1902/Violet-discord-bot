const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
let delembed = new Discord.MessageEmbed()
.setTitle("Violet AutoDelete")
.setColor("b91dff")
.setImage("https://s7.gifyu.com/images/ezgif.com-video-to-gif-6.gif")
.setDescription("-Violet will automatically delete messages in a channel if a channel's topic is set to ``{violetdelete}``\n\nBot must have ``Manage Messages`` perms to delete messages")
message.channel.send(delembed);
};
module.exports.help = {
    name: "autodelete",
    description: "Auto delete messages sent in a channnel.",
    usage: "changing channel topic to ``{violetdelete}``",
    aliases: "none",
    accessableby: "Members with ``MANAGE_MESSAGES`` Perms"
}