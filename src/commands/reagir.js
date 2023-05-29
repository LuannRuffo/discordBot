const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reagir")
        .setDescription("reagir positivo ou negativo"),

    async execute(int) {
        await int.reply('reaja abaixo');

        const mensagem = await int.fetchReply();
        await mensagem.react('✅');
        await mensagem.react('❌')

    },
}