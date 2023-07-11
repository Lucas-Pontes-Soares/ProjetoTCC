const userModel = require("../../database/models/usuario")

module.exports = getAllUsers = async(req, res) => {
    const nickDigitado = req.params.nickDigitado
    await userModel.find({nick: { $regex: '.*' + nickDigitado + '.*' }}).then((allUsers) => {
        if (allUsers.length > 0){
            res.json({success: true, type: "Sucesso", message: "Todos os usuários filtrados por nick", users: allUsers})
        } else {
            res.json({success: true, type: "Perigo", message: "Nenhum usário encontrado com este nick"})
        }
    }).catch((err) => {
        res.json({success: false, type: "Erro", message: "Perfis não encontrados", err: err.message})
    })
}