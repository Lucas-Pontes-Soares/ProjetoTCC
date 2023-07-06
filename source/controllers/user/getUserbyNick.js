const userModel = require("../../database/models/usuario")

module.exports = getUserProfileById = async(req, res) => {
    const nickURL = req.params.nickURL

    await userModel.findOne({nick: nickURL}).then((user) => {
        if(user){
            res.json({success: true, message: "Perfil do usuario encontrado", perfil: user})
        }else {
            return res.status(404).send("Usuario não encontrado")
        }
    }).catch((err) => {
        res.json({success: false, message: "Perfil não encontrado", err: err.message})
    })
}