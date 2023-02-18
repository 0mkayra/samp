const { Events } = require("discord.js");
const gamedig = require("gamedig");

module.exports = {
  name: Events.ClientReady,
  once: true,
  
  async execute(client, config) {
    console.log(`${client.user.tag} HAZIR.`)
    
    const server = config.server;
  
    setInterval(async function playersUpdate() {
      const samp = await gamedig.query({
        type: "samp",
        host: server.ip || "45.95.65.186",
        port: server.port || "7777",
      });
      

      client.user.setPresence({ activities: [{ name: `Oyuncular: ${samp.raw.numplayers}/${samp.maxplayers}` }], status: 'idle' });
    }, config.duration)
  }
}