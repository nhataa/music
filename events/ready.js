module.exports = async (client) => {
  //(client.Ready = true),
   // client.user.setPresence({
      
     const activities = [
        { name: `${client.guilds.cache.size} Servers`, type: 1 }, // playing
        { name: `+help`, type: 2},  //LISTENING
        { name: `${client.users.cache.size} Users`, type: 3}, // WATCHING
    ];
    const status = [
        'online'
    ];
    let i = 0;
    setInterval(() => {
        if(i >= activities.length) i = 0
        client.user.setActivity(activities[i])
        i++;
    }, 5000);
  
    let s = 0;
    setInterval(() => {
        if(s >= activities.length) s = 0
        client.user.setStatus(status[s])
        s++;
    }, 30000);
    //})
    client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); 
  client.RegisterSlashCommands();
};
