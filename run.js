const Discord = require("discord.js");
//const message = new Discord.Message();
//const presence = new  Discord.Presence();
const client = new Discord.Client();
const config = require ("./config.raith.json");
const prefix = config.prefix;

// Inicializacion del bot
client.on("ready", () => {
    console.log(`He conectado con ${client.user.tag}!`);
    client.user.setPresence({
      status: "online",
      game: 
      {
        name: '-help | Que vamos a escuchar hoy? :D',
        type: "PLAYING"
      }
    });
 });

 //Token del bot
 client.login(config.token);

 //Deteccion de fallas
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.debug(e));

 //Configuracion del comando main con prefix module.exports = async (client) =>
 client.on("message", (message) => 
  {
    
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase().slice(prefix);

     if (command === 'join') 
     { 
        const voiceChannel = message.member.voice.channel;
       // const channel = client.channels.cache.get("755184848792191012");
        if (!voiceChannel) return message.channel.send("Debe estar en un canal de voz").catch(error => message.channel.send(error));
        voiceChannel.join().then(connection => {
            message.channel.send(':white_check_mark: | Ya estoy ready para reproducir tu musica | :thumbsup:').catch(error => message.channel.send(error));   
            //console.log("Conectado nice");
        }).catch(e => {
            console.error(e);
        });
     }

//Abandonar el canal de voz
      if (command === 'leave')
      {
          const voiceChannel = message.member.voice.channel;
          if (!voiceChannel) return message.channel.send('No estoy en ningun canal de voz pendejo xd').catch(error => message.channel.send(error));
          message.channel.send('Bai Bai mai friends :D').then((leave) => {
              voiceChannel.leave();
          }).catch(error => message.channel.send(error));
      }
  });
 
     

