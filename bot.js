const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith('('+'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/X_Xz");
      message.channel.sendMessage(`**✅   ${argresult}**`)
  }


client.login(process.env.BOT_TOKEN); 
