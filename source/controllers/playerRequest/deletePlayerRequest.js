const playerRequestModel = require("../../database/models/playerRequest")

module.exports = deletePlayerRequest = async(req, res) => {
    const idPlayerRequest = req.params.id
    let type = "Sucesso"
    let message = "Requisição deletada"
    playerRequestModel.deleteOne({_id: idPlayerRequest}).then((playerRequest) => {
        if(!playerRequest){
            type = "Erro";
            message = "Requisição não deletada";
        }
        res.json({success: true, type: type, message: message})
    }).catch((err) => {
        res.json({success: false, message: "Requisição não deletada", err: err.message})
    })
}