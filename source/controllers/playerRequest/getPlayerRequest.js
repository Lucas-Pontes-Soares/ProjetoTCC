const playerRequestModel = require("../../database/models/playerRequest")

module.exports = getPlayerRequest = async(req, res) => {
    await playerRequestModel.find({}).then((allPlayerRequest) => {
        res.json({success: true, message: "Todas as requisições de jogadores", busca: allPlayerRequest})
    }).catch((err) => {
        res.json({success: false, message: "Requsições não encontradas", err: err.message})
    })
}