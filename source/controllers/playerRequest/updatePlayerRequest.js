const playerRequestModel = require("../../database/models/playerRequest")

module.exports = updatePlayerRequest = async(req, res) => {
    const idPlayerRequest = req.params.id
    const body = req.body
    playerRequestModel.findOneAndUpdate({_id: idPlayerRequest}, body, {new: true}).then((playerRequest) => {
        if(playerRequest){
            res.json({success: true, message: "Requisição atualizada", busca: playerRequest})
        }else {
            return res.status(404).send("Requisição não encontrada")
        }
    }).catch((err) => {
        res.json({success: false, message: "Requisição não atualizada", err: err.message})
    })
}