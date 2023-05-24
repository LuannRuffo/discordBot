const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

const interacaoBot = (client) => {
    client.on(Events.InteractionCreate, async int => {
        if (!int.isChatInputCommand()) return
        const comando = int.client.commands.get(int.commandName)

        if (!comando) {
            console.log('comando nao encontrado')
            return
        }

        try {
            await comando.execute(int)
        }

        catch (error) {
            console.error(error)
            await int.reply('Error')
        }
    })
}

module.exports = interacaoBot