const Discord = require("discord.js");
const rm = require('discord.js-reaction-menu');

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do v.help instead.`)

    if(args[0]) {
        message.delete();
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.MessageEmbed()
            .setColor("b91dff")
            .setAuthor(`${command.help.description}`)
            .setThumbnail( "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
            .setDescription(`**Usage:** ${command.help.usage || "No Usage"}\n**Accessible by:** ${command.help.accessableby || "Members"}\n**Aliases:** ${command.help.noalias || command.help.aliases}`)
            message.channel.send(SHembed)
            .then(msg => {
                msg.delete({ timeout: 20000 })
            })
        }}

    if(!args[0]) {
        message.delete();
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Help Command!`)
        .setColor("b91dff")
        .setDescription(`${message.author.username}, Pls check your dms!<:emoji_120:696075987330269196>`)
        message.channel.send(embed)
        .then(msg => { 
            msg.delete({ timeout: 10000 })});
            new rm.menu(message.author, message.author.id, [new Discord.MessageEmbed()
                .setColor("b91dff")
                .setAuthor(`Violet Commands`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
                .setThumbnail("https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
                .setDescription("Here is the list of all commands!\nUse ``v.help [command]`` for more information.\nExample: ``v.help avatar``")
                .addField("**__Help__**", "```yaml\n•help [command]\n•cooldown\n•feedback\n•report\n•suggest\n•support\n•invite\n•updates\n•vote\n```")
                .addField("**__General__**", "```yaml\n•avatar\n•autodelete\n•gtn (guess the number)\n•snipe\n```")
                .addField("**__Fun__**", "```yaml\n•8ball\n•rps\n•rps2 (Two Player)\n•coinflip\n•choose\n```")
                .setFooter("Page 1-3"),
                new Discord.MessageEmbed()
                .setAuthor(`Violet Commands`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
                .setThumbnail("https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
                .setDescription("Use ``v.help [command]`` for more information.\nExample: ``v.help avatar``")
                .addField("**__Interaction Commands__** (Mention)", "```yaml\n•beg (please)\n•bite\n•boop\n•bully\n•cuddle\n•feed\n•flirt\n•goodluck (gl)\n•greet\n•handhold\n•happybday\n•highfive\n•hug\n•ily\n•insult\n•kill\n•kiss\n•lick\n•pat\n•poke\n•punch\n•purr\n•save\n•shoot\n•sigh\n•slap\n•spank\n•stare\n•stfu\n•stomp\n•tickle\n•wave\n•yaoikiss\n•yurikiss\n```")
                .addField("**__Interaction Commands__**", "```yaml\n•annoyed\n•banghead\n•blush\n•bored\n•clap\n•confused\n•cringe\n•cry\n•dab\n•dance\n•die\n•enter\n•evillaugh\n•facepalm\n•faint\n•flex\n•glare\n•gm (good morning)\n•gn (good night)\n•hungry\n•hype\n•laugh\n•lewd\n•nervous\n•nigerundayo\n•ouch\n•pout\n•run\n•sad\n•shrug\n•shy\n•sip\n•sleepy\n•smile\n•thankyou (ty)\n•think\n•wink\n```")
                .setFooter("Page 2-3")
                .setColor("b91dff"),
                new Discord.MessageEmbed()
                .setAuthor(`Violet Commands`, "https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
                .setThumbnail("https://cdn.discordapp.com/attachments/646373454073036830/695544906378117180/image0.jpg")
                .setDescription("Use ``v.help [command]`` for more information.\nExample: ``v.help avatar``")
                .addField("**__Meme Commands__**", "```yaml\n•areyousure\n•coffin\n•comeatme\n•disappear\n•domath\n•fastaf\n•hadus\n•idgaf\n•ilied\n•justdoit\n•letmein\n•noice\n•popcorn\n•salt\n•smort\n•tfconfused\n•tfist\n•wtf\n•yeahbwoi\n```")
                .setFooter("Page 3-3")
                .setColor("b91dff")])
        
        }
}


module.exports.help = {
    name:"help",
    aliases: "none",
    usage: "v.usage",
    description: "",
    accessableby: "Members"
}