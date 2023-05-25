const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reagir")
        .setDescription("reagir positivo ou negativo"),

    async execute(int) {

        try {
            const reply = await int.channel.send("Reaja abaixo.")
            await reply.react('✅');
        } catch (error) {
            console.error("Erro ao adicionar reação:")
        }
        return
    },
}