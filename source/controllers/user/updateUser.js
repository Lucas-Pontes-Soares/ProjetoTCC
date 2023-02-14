const userModel = require("../../database/models/usuario")

module.exports = updateUserProfile = async(req, res) => {
    const idUser = req.params.id
    const body = req.body
    userModel.findOneAndUpdate({_id: idUser}, body, {new: true}).then((user) => {
        if(user){
            res.json({success: true, message: "Usuario atualizado", perfil: user})
        }else {
            return res.status(404).send("Usuario não encontrado")
        }
    }).catch((err) => {
        res.json({success: false, message: "Usuario não atualizado", err: err.message})
    })
}