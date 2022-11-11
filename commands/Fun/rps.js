const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    const rng = Math.floor((Math.random() * 100) + 1);



    if (args[0] === 'rock' && rng > 0 && rng <= 34) {

        return message.channel.send('I have rock! It\'s a tie!');

    }

    else if (args[0] === 'rock' && rng > 34 && rng <= 67) {

        return message.channel.send('I have paper! You lose!');

    }

    else if (args[0] === 'rock' && rng > 67 && rng <= 100) {

        return message.channel.send('I have scissors! You win!');

    }

    else if (args[0] === 'paper' && rng > 0 && rng <= 34) {

        return message.channel.send('I have paper! It\'s a tie!');

    }

    else if (args[0] === 'paper' && rng > 34 && rng <= 67) {

        return message.channel.send('I have scissors! You lose!');

    }

    else if (args[0] === 'paper' && rng > 67 && rng <= 100) {

        return message.channel.send('I have rock! You win!');

    }

    else if (args[0] === 'scissors' && rng > 0 && rng <= 34) {

        return message.channel.send('I have scissors! It\'s a tie!');

    }

    else if (args[0] === 'scissors' && rng > 34 && rng <= 67) {

        return message.channel.send('I have rock! You lose!');

    }

    else if (args[0] === 'scissors' && rng > 67 && rng <= 100) {

        return message.channel.send('I have paper! You win!');

    }



    if (args[0] !== 'rock' || args[0] !== 'paper' || args[0] !== 'scissors') {

        return message.reply('please input rock, paper, or scissors.');

    }



};

module.exports.help = {
    name: "rps",
    description: "Play rock, paper, scissors with the bot.",
    usage: "``v.rps (rock or paper or scissor)``\nExample: ``v.rps rock``",
    aliases: "none",
    accessableby: "Members"
}