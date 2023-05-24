const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

const listarComandos = require('./controladores/listarcomando')
const interacaoBot = require('./controladores/interacaobot')

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()

listarComandos(client)

client.once(Events.ClientReady, c => {
    console.log(`Pronto! Login realizado como ${c.user.tag}`)
});
client.login(TOKEN)

interacaoBot(client)