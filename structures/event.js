const { readdirSync } = require("fs");
const { join } = require("path");
const filepath = join(__dirname, "..", "events");

module.exports.run = (bot) => {
    const eventFiles = readdirSync(filepath);
    for (const eventFile of eventFiles) {
        const event = require(`${filepath}/${eventFile}`);
        const eventName = eventFile.split(".").shift();
        bot.on(eventName, event.bind(null, bot));    
    }

    console.log(`Loaded ${eventFiles.length} events!`);
}