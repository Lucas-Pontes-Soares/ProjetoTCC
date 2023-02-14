const userModel = require("../../database/models/usuario")

module.exports = deleteUserProfile = async(req, res) => {
    const UserId = req.params.id

    userModel.deleteOne({_id: UserId}).then((user) => {
        if(user){
            res.json({success: true, message: "Usuario deletado"})
        }else {
            return res.status(404).send("Usuario não encontrado")
        }
    }).catch((err) => {
        res.json({success: false, message: "Usuario não deletado", err: err.message})
    })
}