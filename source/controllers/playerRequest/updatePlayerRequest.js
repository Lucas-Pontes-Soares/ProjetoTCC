const playerRequestModel = require("../../database/models/playerRequest")

module.exports = updatePlayerRequest = async(req, res) => {
    const idPlayerRequest = req.params.id
    const body = req.body
    playerRequestModel.findOneAndUpdate(idPlayerRequest, body, {new: true}).then((playerRequest) => {
        res.json({success: true, message: "Requisição atualizada", busca: playerRequest})
    }).catch((err) => {
        res.json({success: false, message: "Requisição não atualizada", err: err.message})
    })
}