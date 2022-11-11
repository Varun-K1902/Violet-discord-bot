const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
    if (message.member.id != "529272887580950547") return message.channel.send("This command is under update.");
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`You need to have **ADMINISTRATOR** to use this command`)
    .then(msg => {
        msg.delete({ timeout: 5000 })
    })
    let ngchannel = message.mentions.channels.first()
    if(ngchannel){
    if(!args[1] && !args[2] && !args[3]) return message.channel.send('Please Add Limit and guess; `v.gtnstart <#channel> <lowerlimit> <upperlimit> <correct-number>`');
    const LL = args[1];
    const UL = args[2];
    const guess = args[3];
    if(isNaN(args[1])) return message.channel.send('Lower Limit Is not a valid number');
    if(isNaN(args[2])) return message.channel.send('Upper Limit Is not a valid number');
    if(isNaN(args[3])) return message.channel.send('Guess Is not a valid number');
    if(parseInt(args[3]) > parseInt(args[2]))return message.channel.send("Guess cannot be greater than upper limit");
    if(parseInt(args[3]) < parseInt(args[1]))return message.channel.send("Guess cannot be less than lower limit");
    const embedq = new Discord.MessageEmbed()
    .setTitle('**Guess The Number** :1234:')
        .setDescription('**Event started!**')
        .setThumbnail('https://cdn.discordapp.com/attachments/690764732852076550/711557954750644274/15897190266282883438140828176865.jpg')
        .setColor("b91dff")
        .setTimestamp()
        .addField('**How To Play**', `-Guess and type the random number in chat.\n-The number is placed between  \`${LL} and ${UL}\`.\n-The first person who guesses it right wins!`)
        .setFooter(`Started by ${message.author.username}`, message.author.displayAvatarURL());
    ngchannel.updateOverwrite(ngchannel.guild.roles.everyone, { SEND_MESSAGES: true }).then(msg => {
    ngchannel.send(embedq);
    })
    const filter = m => m.content;
    const collector = ngchannel.createMessageCollector(filter);
    collector.on('collect', m => {
        if(m.author.id == message.author.id && m.content === 'gtnend'){
            const endembed = new Discord.MessageEmbed()
            .setColor("b91dff")
            .setTimestamp()
            .setThumbnail('https://cdn.discordapp.com/attachments/690764732852076550/711557954750644274/15897190266282883438140828176865.jpg')
            .setTitle('**Guess The Number** :1234:')
            .setDescription('**Event Ended!**\nNo one won')
            .addField('Correct Number:', `**${guess}**`)
            .setFooter(`Ended by ${message.author.username}`, message.author.displayAvatarURL())
            ngchannel.send(endembed);
            ngchannel.updateOverwrite(ngchannel.guild.roles.everyone, { SEND_MESSAGES: false });
            collector.stop();
        }
        if (m.content == guess){
            collector.on('end', collected => {
            const winner = m.author;
            const ahkkEmbed = new Discord.MessageEmbed()
                .setTitle('Event Ended!')
                .setColor("b91dff")   
                .setTimestamp()  
                .setThumbnail(winner.displayAvatarURL())
                .addField('Winner:', `Congrats ${winner}, you guessed Correct Number`)
                .addField('Correct Number:', `**${guess}**`)
                .addField('Total Guesses:', `**${collected.size}**`)
                .setFooter(`Started by ${message.author.username}`, message.author.displayAvatarURL())
                 ngchannel.send(winner, ahkkEmbed)}).then(msg => {
                 ngchannel.updateOverwrite(ngchannel.guild.roles.everyone, { SEND_MESSAGES: false });
                 message.author.send(`Event Ended! **${winner.username}** guessed the correct number.`)
                 })
                             collector.stop()
            }})
        
        } else {
            message.channel.send("Please mention a channel;\n ``v.gtnstart <#channel> <lowerlimit> <upperlimit> <correct-number>``")
        } 
    }
module.exports.help = {
    name: "gtnstart"
}