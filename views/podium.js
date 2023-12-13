const layout = require("./layout");
const fs = require("fs");

module.exports = (req, res) => {
    // Carregar os dados dos jogadores a partir do arquivo JSON
    const playerData = JSON.parse(fs.readFileSync("./users.json", "utf8"));

    // Ordenar os jogadores por pontuação (do maior para o menor)
    const sortedPlayers = playerData.sort((a, b) => b.score - a.score);

    // Pegar os três melhores jogadores
    const topPlayers = sortedPlayers.slice(0, 3);

    // Criar o layout do pódio com os três melhores jogadores
    const podiumContent = topPlayers.map((player, index) => {
        return `
        <h${index + 1} class="user">${player.nickname}</h${index + 1}>
        <span class="score">${player.gameData.maxScore}</span>
        `;
    }).join("");

    // Retornar o layout completo com os jogadores no pódio
    return layout({
        content:
        `
        <div class="podium">
            ${podiumContent}
        </div>
        `
    });
};
