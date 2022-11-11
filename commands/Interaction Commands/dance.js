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
        let after = message.content.slice (8); 
    let member = message.mentions.users.first() || message.author;
    let replies = ["https://cdn.zerotwo.dev/DANCE/87f79f72-401b-4198-b29c-855682e42051.gif", "https://cdn.zerotwo.dev/DANCE/f94ea0d6-9c00-499c-bc49-6124ecf73661.gif", "https://cdn.zerotwo.dev/DANCE/24093bef-a684-494e-b569-6add6590d07f.gif", "https://cdn.zerotwo.dev/DANCE/e562a7be-acb1-45f2-89b2-ee0623cee18b.gif", "https://cdn.zerotwo.dev/DANCE/d2178bd6-e3ff-44cf-94e7-a1d98b5f1d47.gif", "https://cdn.zerotwo.dev/DANCE/88e72008-7dd2-4cb6-b495-a060130fc20f.gif", "https://cdn.zerotwo.dev/DANCE/8a519baa-d32a-45fb-b3b1-9392cd4cbab9.gif", "https://cdn.zerotwo.dev/DANCE/30c28670-6672-42f2-9ac5-8e26688ee6d2.gif", "https://cdn.zerotwo.dev/DANCE/88781111-9be4-48c9-8782-36b0317e44e5.gif", "https://cdn.zerotwo.dev/DANCE/0fde42e7-9159-4719-a436-1c01914fd653.gif", "https://cdn.zerotwo.dev/DANCE/befb6e9d-66b2-48aa-89de-d3f48a5b398f.gif", "https://cdn.zerotwo.dev/DANCE/e9f8fddf-fcce-4ea1-a1a5-e38fd41bf591.gif", "https://cdn.zerotwo.dev/DANCE/ccce8da2-ea33-4cef-acf7-b2c969d5717f.gif", "https://cdn.zerotwo.dev/DANCE/f577303f-f763-450e-b35d-5c245495b05a.gif", "https://cdn.zerotwo.dev/DANCE/cc34f54e-0ce9-47d6-a6fb-c985ce821800.gif", "https://cdn.zerotwo.dev/DANCE/b53c62bb-b7fa-43bd-b777-19d4d6f6998b.gif", "https://cdn.zerotwo.dev/DANCE/62ce61da-ed7c-4a85-b05c-bdea0ec30b29.gif", "https://cdn.zerotwo.dev/DANCE/8e5befcc-c5b8-4015-b480-f854bf86249d.gif", "https://cdn.zerotwo.dev/DANCE/9148984c-b9f6-4620-a0a1-2f7392bd4d60.gif", "https://cdn.zerotwo.dev/DANCE/45c86338-cc11-4a8e-b463-2ef3f718dcac.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
    .setDescription(`**<@${message.author.id}> dances ${after}**`)
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
    name: "dance",
    description: "Sends a dance gif.",
    usage: "``v.dance``",
    aliases: "dancewith",
    accessableby: "Members"
}