const userModel = require("../../database/models/usuario")

module.exports = createUser = async(req, res) => {
    const email = req.body.email
    const body = req.body
    userModel.findOne({email: email}).then((user)=>{
        if(!user){
            userModel.create(body).then((users)=>{
                res.json({success: true, message: "Usuario criado", user: users})
            }).catch((err)=>{
                res.json({success: false, message: "Usuario não criado", err: err.message})
            })
        } else {
            res.json({success: false, message: "Usuario não criado, esse email ja está em uso"})
        }
    })
}