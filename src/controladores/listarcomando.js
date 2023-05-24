const listarComandos = (client) => {

    const fs = require("node:fs")
    const path = require("node:path")

    const comandoPath = path.join(__dirname, "..", "commands")
    const comandoFile = fs.readdirSync(comandoPath).filter(arquivo => {
        return arquivo.endsWith(".js")
    })

    for (const arquivo of comandoFile) {
        const filePath = path.join(comandoPath, arquivo)
        const comando = require(filePath)
        if ("data" in comando && "execute" in comando) {
            client.commands.set(comando.data.name, comando)
        } else {
            console.log(`Esse comando em ${filePath} está com "data" ou "execute ausentes"`)
        }
    }


}

module.exports = listarComandos