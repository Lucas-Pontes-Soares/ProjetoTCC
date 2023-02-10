const userModel = require("../../database/models/usuario")

module.exports = createUser = async(req, res) => {
    const body = req.body
    userModel.create(body).then((users)=>{
        res.json({success: true, message: "Usuario criado", user: users})
    }).catch((err)=>{
        res.json({success: false, message: "Usuario criado", err: err.message})
    })
}