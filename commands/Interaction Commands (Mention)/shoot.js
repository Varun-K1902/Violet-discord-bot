const Discord = module.require("discord.js");
const usedCommandRecently = new Map();
const Duration = require('humanize-duration');

module.exports.run = async (bot, message, args) => {
    const cooldown = usedCommandRecently.get(message.author.id);
    if(cooldown){
        const remaining = Duration(cooldown - Date.now(), { units: ['s'], round: true});
        message.reply(`You are on cooldown for **${remaining}<:cooldown:711864794256506920>**`)
        .then(msg => {
            msg.delete({ timeout: 4000 })
          })
        
    } else{
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://cdn.zerotwo.dev/SHOOT/b39598bd-5a18-487a-a5a2-414ea081205c.gif", "https://cdn.zerotwo.dev/SHOOT/56887bf7-4857-48d1-bf1e-8b04bf5b272f.gif", "https://cdn.zerotwo.dev/SHOOT/d531b121-5bf4-43df-a723-f13e90c370c2.gif", "https://cdn.zerotwo.dev/SHOOT/fce35165-b31e-4eea-9184-9dae9be81421.gif", "https://cdn.zerotwo.dev/SHOOT/6906011d-c42b-4b5b-bc1c-61cf38ab7d91.gif", "https://cdn.zerotwo.dev/SHOOT/028bfc32-c06b-4295-87a5-7ddaef08d5ef.gif", "https://cdn.zerotwo.dev/SHOOT/49d1a959-5bf9-4ea6-90b1-932bb7b302b9.gif", "https://cdn.zerotwo.dev/SHOOT/e420c1f1-2838-45c1-a56c-ca0c16632b42.gif", "https://cdn.zerotwo.dev/SHOOT/fc3749a2-526c-4a23-81ec-e89f603d02d1.gif", "https://cdn.zerotwo.dev/SHOOT/0465f94f-3ff1-4875-8223-dfdf8043adf0.gif", "https://cdn.zerotwo.dev/SHOOT/5cdb6883-acf4-44a1-98e6-5a249d4b7bfe.gif", "https://cdn.weeb.sh/images/BkvjZI7PW.gif", "https://cdn.weeb.sh/images/SyunmEYiW.gif", "https://cdn.weeb.sh/images/SkiIVEKsW.gif", "https://cdn.weeb.sh/images/ryqfNEtj-.gif", "https://cdn.weeb.sh/images/BkzSQVFoZ.gif", "https://cdn.weeb.sh/images/r1Fa7EFsW.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let after = message.content.slice (8);
    
    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> shoots ${after}**`)
    .setImage(replies[result])
    .setColor("b91dff")

    message.channel.send(gifembed);


    usedCommandRecently.set(message.author.id, Date.now() + 10000);
    setTimeout(() => {
        usedCommandRecently.delete(message.author.id)
    }, 10000);
    }
};

module.exports.help = {
    name: "shoot",
    aliases: "none",
    usage: "``v.shoot @User``",
    description: "Shoot someone",
    accessebleby: "Members"
}