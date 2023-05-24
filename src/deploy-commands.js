const { REST, Routes } = require("discord.js")

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

const fs = require("fs")
const path = require("path")
const comandosFile = path.join(__dirname, "commands")
const comandosPath = fs.readdirSync(comandosFile).filter(file => file.endsWith(".js"))

const comandos = []

for (const arquivo of comandosPath) {
    const comando = require(`./commands/${arquivo}`)
    comandos.push(comando.data.toJSON())
}

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
    try {
        console.log(`Resentando ${comandos.length} comandos...`)

        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: comandos }
        )
        console.log("Comandos registrados com sucesso!")
    }
    catch (error) {
        console.error(error)
    }
})()