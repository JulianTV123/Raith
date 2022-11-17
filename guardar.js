
    let miembroVoz = message.channel.id;
    let Canalvoz = client.channels.cache.get(miembroVoz);
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {
               m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
     }).catch(error => message.channel.send(error));
    }

    client.on("message", (message) => 
    {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase().slice(prefix);
     
   //Unirse al canal de voz


    if (command === 'join') { 

        const channel = client.channels.cache.get("755184848792191012");
        if (!channel) return console.error("No existe");
        channel.join().then(connection => {
            console.log("Conectado nice");
        }).catch(e => {
            console.error(e);
        });
    
        let miembroVoz = message.channel.id;
        let Canalvoz = client.channels.cache.get(miembroVoz);
        if (!Canalvoz || Canalvoz.type !== 'voice') {
        message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
        } else if (message.guild.voiceConnection) {
        message.channel.send('Ya estoy conectado en un canal de voz.');
        } else {
         message.channel.send('Conectando...').then(m => {
              Canalvoz.join().then(() => {
                   m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
        }
    }
});
