const playerRequestModel = require("../../database/models/playerRequest")

module.exports = createPlayerRequest = async(req, res) => {
    const body = req.body
    playerRequestModel.create(body).then((playerRequest)=>{
        res.json({success: true, message: "Requisição de jogador criada", busca: playerRequest})
    }).catch((err)=>{
        res.json({success: false, message: "Requisição de jogador não criada", err: err.message})
    })
}