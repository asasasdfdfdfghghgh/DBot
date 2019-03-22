 const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | $invite`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});



// + معلومات البوت + كود البينج الهو سرعة البوت
 
client.on('message', message => {
    if (message.content === ('$bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**سرعة البوت 🚀 :**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**السيرفرات 📚 :**', [client.guilds.size], true)
            .addField('**الرومات 📝 :**' , `[ ${client.channels.size} ]` , true)
            .addField('**خادم :**' , `__**GMZN Host/V4:Pro**__` , true)
            .addField('**البرفكس :**' , `$` , true)
            .addField('**الأشخاص 🔮 :**' ,`[ ${client.users.size} ]` , true)
            .addField('**اسم البوت 🔰 :**' , `[ ${client.user.tag} ]` , true)
            .addField('**صاحب البوت 👑 :**' , `[<@545315760877076510>]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});

//كود الانفيت بشكل جميل
client.on('message' , message => {
 
    if (message.content === "$invite") {
        message.reply(`تم ارساله الرابط في الخاص`)
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)    
 .setDescription("دعوة اضافة البوت" + `
 **
رابط البوت |
http://cutt.us/DBotDiscord
 **
`);
  message.author.sendEmbed(embed);
   }
});

client.login(process.env.BOT_TOKEN);
