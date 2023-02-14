const playerRequestModel = require("../../database/models/playerRequest")

module.exports = deletePlayerRequest = async(req, res) => {
    const idPlayerRequest = req.params.id

    playerRequestModel.deleteOne({_id: idPlayerRequest}).then((playerRequest) => {
        if(playerRequest){
            res.json({success: true, message: "Requisição deletada"})
        }else {
            return res.status(404).send("Requisição não encontrada")
        }
    }).catch((err) => {
        res.json({success: false, message: "Requisição não deletada", err: err.message})
    })
}