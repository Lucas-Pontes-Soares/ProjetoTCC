const playerRequestModel = require("../../database/models/playerRequest")

module.exports = getPlayerRequestById = async(req, res) => {
    const userId = req.params.userId
    await playerRequestModel.find({userId: userId}).then((PlayerRequest) => {
        if(!PlayerRequest.length == 0){
            res.json({success: true, message: "Requisição do usuario encontrada", Requisição: PlayerRequest})
        }else {
            return res.status(404).send("Requisição não encontrada")
        }
    }).catch((err) => {
        res.json({success: false, message: "Perfil não encontrado", err: err.message})
    })
}