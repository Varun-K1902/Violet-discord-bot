const Discord = require("discord.js");
const fs = require("fs");
const usedCommandRecently = new Set();

const prefixes = ['V.', 'v.'];


const bot = new Discord.Client({disableEveryone: true})

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.limits = new Map();
bot.snipes = new Map();
bot.categories = fs.readdirSync("./commands/");


const events = require("./structures/event");
events.run(bot);

  const DBL = require('dblapi.js');
  const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDEwNjc0NzUzNjUzOTY2OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg5MzU0NDg4fQ.cRVhO5PiuTASkGuk4AkUinPgbddQR0D3RYP6HprCsZw', bot);
 
dbl.on("posted", () => {
    console.log("server count posted!");
});


fs.readdir("./commands/Interaction Commands (Mention)", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/Interaction Commands (Mention)/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});


fs.readdir("./commands/General", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/General/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});


fs.readdir("./commands/Fun", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/Fun/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});


fs.readdir("./commands/Help", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/Help/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});


fs.readdir("./commands/Interaction Commands/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/Interaction Commands/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

fs.readdir("./commands/owner/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/owner/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

fs.readdir("./commands/meme/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/meme/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(/\s+/g);
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);

    let prefix = false;
    for(const thisPrefix of prefixes) {
      if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
    }
    if(!prefix) return;
  

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    
});

bot.on('message', msg => {
    if(msg.channel.topic !== '{violetdelete}') return;
    if(!msg.guild.me.hasPermission('MANAGE_MESSAGES')) return;
    else msg.delete();
});

bot.on("guildCreate", guild => {
    if(guild.id === "710003016614281276")return;
    let mem = guild.memberCount - guild.members.cache.filter(m=>m.user.bot).size
    if(mem < 20){
        guild.leave()
    }
});

bot.on("guildCreate", guild => {
    
    let botchan = bot.channels.cache.get(`718721924296998974`);
    let botchanembed = new Discord.MessageEmbed()
    .setTitle(`Joined ${guild.name}`)
    .addField(`Guild Owner:`,guild.owner.user.tag)
    .addField(`Guild ID:`, guild.id)
    .addField(`Guild Members:`, `${guild.memberCount - guild.members.cache.filter(m=>m.user.bot).size} (${guild.members.cache.filter(m=>m.user.bot).size} bots)`, true)
    .setThumbnail(guild.iconURL())
    .setColor("b91dff")
if(botchan)
botchan.send(botchanembed)
});

bot.on("guildDelete", guild => {
    
    let botchan2 = bot.channels.cache.get(`718721924296998974`);
    let botchanembed2 = new Discord.MessageEmbed()
    .setTitle(`Left ${guild.name}`)
    .addField(`Guild Owner:`, guild.owner.user.tag)
    .addField(`Guild ID:`, guild.id)
    .addField(`Guild Members:`, `${guild.memberCount - guild.members.cache.filter(m=>m.user.bot).size} (${guild.members.cache.filter(m=>m.user.bot).size} bots)`, true)
    .setThumbnail(guild.iconURL())
    .setColor("b91dff")
if(botchan2)
botchan2.send(botchanembed2);
});

bot.on("ready", () => {
    console.log(`Bot is ready! ${bot.user.username}`);
    let onchan = bot.users.cache.get(`529272887580950547`);
    onchan.send(`${bot.user.username} restarted! <@529272887580950547>`)
    bot.user.setActivity(`${bot.guilds.cache.size} servers! | v.help`, { type: 'WATCHING' });
});


bot.login(process.env.TOKEN);