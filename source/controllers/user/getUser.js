const userModel = require("../../database/models/usuario")

module.exports = getUserProfile = async(req, res) => {
    const UserId = req.params.id

    await userModel.findById(UserId).then((user) => {
        if(user){
            res.json({success: true, message: "Perfil do usuario encontrado", perfil: user})
        }else {
            return res.status(404).send("Usuario não encontrado")
        }
    }).catch((err) => {
        res.json({success: false, message: "Perfil não encontrado", err: err.message})
    })
}