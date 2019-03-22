const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 //lient.user.setActivity("&bc - $bot || Dbot ", {type: 'STREAMIN'});
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log(' Bot with GMZN Host')
  console.log(' Bot with GMZN Host')
  console.log(' Bot with GMZN Host')
  console.log(' Bot with GMZN Host')
  console.log(' Bot with GMZN Host')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


//-

client.on('ready', function(){
 var ms = 7000;
 var setGame = [`${client.guilds.size} Servers`,`${prefix}bot`,`${prefix}bc | ${prefix}invite`];
    var i = -1;
    var j = 0;
    setInterval(function (){
       if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setActivity(setGame[i],{type: "WATCHING"});
    }, ms);
 
 
 
})

//بداية كود البرودكاست

lient.on("message", message => {

if (message.content.startsWith('$bc')){
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **: عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
});

//نهاية كود البرودكاست

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
            .addField('**خادم :**' , `__**GMZN Host | V4:Pro**__` , true)
            .addField('**البرفكس :**' , `$` , true)
            .addField('**الأشخاص 🔮 :**' ,`[ ${client.users.size} ]` , true)
            .addField('**اسم البوت 🔰 :**' , `[ ${client.user.tag} ]` , true)
            .addField('** صاحب البوت 👑 :**' , `__**root**__ مخصص الي  - [<@545315760877076510>] ` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});

//---

client.on('message' , message => {
 
    if (message.content === "$nvite") {
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

//بداية كود الخ


client.login(process.env.BOT_TOKEN);
