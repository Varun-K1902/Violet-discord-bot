const Discord = module.require("discord.js");
const usedCommandRecently = new Set();

module.exports.run = async (bot, message, args) => {
    if(usedCommandRecently.has(message.author.id)){
        message.reply("You are on cooldown!")
        .then(msg => {
            msg.delete({ timeout: 3000 })
          })
        
    } else{

message.channel.send("(╯°□°）╯︵ ┻━┻").then(Message => {
    setTimeout(() => { Message.edit("(╮°□°）╮︵ ┻━┻"); }, 1000);
    setTimeout(() => { Message.edit("╭ (°□°╭）︵ ┻━┻"); }, 2000);
    setTimeout(() => { Message.edit("╭ (°□°╭）  ︵ ┻━┻"); }, 3000);
    setTimeout(() => { Message.edit("╭ (°□°╭）    ︵ ┻━┻"); }, 4000);
    setTimeout(() => { Message.edit("╭ (°□°╭）      ︵ ┻━┻"); }, 5000);
    setTimeout(() => { Message.edit("╭ (°_°╭）      ︵ ┻━┻"); }, 6000);
    setTimeout(() => { Message.edit("(╮°_°）╮      ︵ ┻━┻"); }, 7000);
    setTimeout(() => { Message.edit("(╮°_°）╮    ︵ ┻━┻"); }, 8000);
    setTimeout(() => { Message.edit("(╮°_°）╮  ︵ ┻━┻"); }, 9000);
    setTimeout(() => { Message.edit("(╮°_°）╮︵ ┻━┻"); }, 10000);
    setTimeout(() => { Message.edit("(ヘ･_･)ヘ┻━┻"); }, 11000);
    setTimeout(() => { Message.edit("(ヘ･_･)ヘ┳━┳"); }, 12000);
})
usedCommandRecently.add(message.author.id);
setTimeout(() => {
    usedCommandRecently.delete(message.author.id)
}, 10000);
}
};
module.exports.help = {
    name: "tableflip",
    description: "Sends a laugh gif.",
    usage: "``v.laugh``",
    aliases: "laughat",
    accessableby: "Members"
}