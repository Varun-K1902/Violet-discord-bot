const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send("The 8ball is at your service. What do you need an answer for?");

    let cmd = args[0].toLowerCase();
    const responses = [

        // Yes
    
        "Well... yeah. It's kinda obvious.",
    
        "Sure, I guess.",
    
        "uhm... duh??",
    
        "How could I ever say no to you? :heart:",
    
        "Ye.",
    
        "Very, very likely",
    
        "I'm betting my life on it",
    
        "Yup yup",

        "It is certain",

        "It is decidedly so",

        "Without a doubt",

        "Yes definitely",
    
    
    
        // Maybe
    
        "Maybe. Perhaps. I guess.",
    
        "Yes. Well, yes *and* no.",
    
        "No. Well, yes *and* no.",,
    
        "Just... I mean, if you want to?",
    
        "I suppose. It's not the first thing that comes to my mind though",
    
        "I *GUESS*",
    
        "I don't know, maybe?",
    
        "It's not *impossible*, it's just not likely.",
    
    
    
        // No
    
        "NO! NEVER!",
    
        "Uhm... I don't think so",
    
        "Yeah, no, definitely not.",
    
        "Not. A. Chance.",
    
        "No.",
    
        "GOD NO",
    
        "I am certain that is not the case, no.",
    
        "Oh, no no no no no. Just no.",

        "Outlook not so good",
    
    
    
        // Unspecified
    
        "Ehh...",
    
        "I'm kinda busy here, can't you figure it out yourself?",
    
        "I don't think I wanna give my opinion on this.",
    
        "LEAVE ME ALONE REEEEEEE",
    
        "It Depends™",
    
        "On times like this, I like to ask myself: what would Jesus say?",
    
        "Great question. Just wonderful. I love it. Ask me again.",
    
        "Huh. Never thought of it that way. I'll sleep on it and get back to you tomorrow, 'k?",

        "Better not tell you now"
      ];

      var respond = responses[Math.round(Math.random() * (responses.length - 1))];
    
    
    message.channel.send(`${respond}`)

}
module.exports.help = {
    name: "8ball",
    description: "Asks 8ball your question.",
    usage: "``v.8ball <your-question>``\nExample: ``v.8ball should i go out today?``",
    aliases: "none",
    accessableby: "Members"
  }
