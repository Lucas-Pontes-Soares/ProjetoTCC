const playerRequestModel = require("../../database/models/playerRequest")

module.exports = getPlayerRequestById = async(req, res) => {
    const userId = req.params.userId
    const message = "Requisição do usuario encontrada"
    const type = "Sucesso"
    await playerRequestModel.find({userId: userId}).then((PlayerRequest) => {
        if(PlayerRequest.length == 0){
            message = "Você não possui requisições"
            type = "Erro"
        }
        res.json({success: true, type: type, message: message, Requisição: PlayerRequest})
    }).catch((err) => {
        res.json({success: false, type: "Erro", message: "Você não possui requisições", err: err.message})
    })
}