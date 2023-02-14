const userModel = require("../../database/models/usuario")

module.exports = loginUser = async(req, res) => {
    const email = req.body.email
    const password = req.body.password

    userModel.findOne({email: email, password: password}).then((user)=>{
        if(user){
            res.json({success: true, message: "Usuario logado", user: user})
        }else {
            return res.status(404).send("Usuario não encontrado")
        }
    }).catch((err)=>{
        res.json({success: false, message: err})
    })
}