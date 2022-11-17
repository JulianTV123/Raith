/*    
     //verificaion de usuario en el canal de voz
     if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz para reproducir música!');

     const permissions = voiceChannel.permissionsFor(message.client.user);

     //verificaion de permisos de hablar en un canal
     if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
         return message.channel.send('¡Necesito permisos para unirme y hablar en el canal de voz!');
     }

     var opts = {
         maxResults: 1,
         key : "YT KEY",
         type : "video"
     };

     const songArg = await search(args.join(' '), opts);
     const songUrl = songArg.results[0].link;
     const songInfo = await ytdl.getInfo(songUrl);
     
     const song = {
         title: songInfo.title,
         url: songInfo.video.url,
         author: message.author.tag
     };

     if (!serverQueue) {
          // Si NO hay una lista de música.
        // <-- Creamos nuestra cola de música a reproducir  -->
     }else {
          // Si HAY una lista de música reproduciendo.
         serverQueue.songs.push(song);
         console.log(serverQueue.songs);
         return message.channel.send(`**${song.title}** ha sido añadido a la cola!, por: ${message.author.tag}`); 
     }
     
     const queueObject = {
         textChannel: message.channel,
         voiceChannel: voiceChannel,
         connection : null,
         songs: [],
         volume: 5,
         playing: true,
     };
        // <-- Establecer la cola de música  -->

    // Creando el conjunto de datos para nuestra cola de música

    queue.set(message.guild.id, queueObject);

    // Agregamos las canciones al conjunto de datos
queueObject.songs.push(song);

// <-- Conectar al canal de voz  -->
try {
    // Aquí unimos el bot al canal de voz y guardar nuestra conexión en nuestro objeto.
    var connection = await voiceChannel.join();
    queueObject.connection = connection;
   
    message.channel.send(`Reproduciendo ahora: **${song.title}**`);
   
    // Llamar a la función de reproducción para comenzar una canción.
    play(message.guild, queueObject.songs[0]);
   
   } catch (err) {
   
    // Imprimir el mensaje de error si el bot no puede unirse al chat de voz
    console.log(err);
    queue.delete(message.guild.id);
    return message.channel.send(err);
   }   
   */
