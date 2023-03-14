const userModel = require("../../database/models/usuario")
jwt = require("jsonwebtoken")

const dotenv = require('dotenv');
dotenv.config();

module.exports = loginUser = async(req, res) => {
    const email = req.body.email
    const password = req.body.password

    userModel.findOne({email: email, password: password}).then((user)=>{
        if(user){
            // token de autenticação, jwt
            const tokenBody = {
                id: user._id,
            }

            var authToken = process.env.AUTH_TOKEN

            const token = jwt.sign(JSON.stringify(tokenBody), authToken)
 
            res.json({
                success: true,
                message: "Usuario Logado!",
                token,
                user: user
            })

        }else {
            return res.status(404).send("Usuario não encontrado")
        }
    }).catch((err)=>{
        res.json({success: false, message: err})
    })
}