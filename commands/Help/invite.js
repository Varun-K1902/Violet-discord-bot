const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    var phrases = [

        'Add me to your server with this link!',

        'I-It\'s not like I want to be invited to your server...',

        'Invite me Onee-chan!',

        'Hello... Please take me...',

        'I\'d love to be in your server!',

        'B-Baka! u///u I-I\'s not like I wanted to be in your server...',

        'Kyaaa~~ A server? Of course!',

        'P-Please invite me.. to your server...'

    ]



    var phrase = phrases[Math.round(Math.random() * (phrases.length - 1))];



    const embed = new Discord.MessageEmbed()
        .setAuthor("Invite Link", "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
        .setColor("b91dff")
        .setDescription(`[${phrase}](https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=1043721303)`)
        .setThumbnail("https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg");


    return message.channel.send({ embed });

}
module.exports.help = {
    name: "invite",
    description: "Get an invite to the bot.",
    usage: "``v.invite``",
    aliases: "none",
    accessableby: "Members"
}