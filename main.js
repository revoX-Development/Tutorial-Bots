const discord = require("discord.js");
const client = new discord.client
const prefix = "!"
let bot = client


client.on('ready', () => {
console.log("Ich bin online")
}
);

client.on("message", async message => {
  
    //Bots ignorieren:
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
  
    var args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g); 
  
    var command = args.shift().toLowerCase();
    
      try {
      delete require.cache[require.resolve(`./cmds/${command}.js`)];
  
      let commandFile = require(`./cmds/${command}.js`);
      if(!commandFile) return;
      commandFile.run(bot, message, args);
    } catch (e) {
      return;
    }
  }); 

client.login("token")//Token vom Developer Portal hier
