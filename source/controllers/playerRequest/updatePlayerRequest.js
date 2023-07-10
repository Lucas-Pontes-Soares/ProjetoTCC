const playerRequestModel = require("../../database/models/playerRequest")

module.exports = updatePlayerRequest = async(req, res) => {
    const idPlayerRequest = req.params.id
    const body = req.body
    let type = "Sucesso"
    let message = "Requisição atualizada"
    playerRequestModel.findOneAndUpdate({_id: idPlayerRequest}, body, {new: true}).then((playerRequest) => {
        if(!playerRequest){
            type = "Erro";
            message = "Requisição não atualizada";
        }
        res.json({success: true, type: type, message: message, busca: playerRequest})
    }).catch((err) => {
        res.json({success: false, message: "Requisição não atualizada", err: err.message})
    })
}