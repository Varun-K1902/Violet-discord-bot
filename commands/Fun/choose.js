const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    	args = args.join(' ');
    	args = args.split(', ');
    	var rdmNum = Math.floor(Math.random() * args.length);

      message.channel.send(`I choose ${args[rdmNum]}`);

    };
module.exports.help = {
  name: "choose",
  description: "Bot will choose one of your suggested choices!.",
  usage: "``v.choose choice1, choice2,...``\nExample: ``v.choose zerotwo, violet, rin``",
  aliases: "none",
  accessableby: "Members"
}