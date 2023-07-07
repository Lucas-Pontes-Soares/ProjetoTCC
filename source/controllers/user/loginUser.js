const userModel = require("../../database/models/usuario")
jwt = require("jsonwebtoken")

const dotenv = require('dotenv');
dotenv.config();

module.exports = loginUser = async(req, res) => {
    const email = req.body.email
    const password = req.body.password

    let sucess = true;
    let type = "Sucesso";
    let message = "Usuario logado";
    let token = null;
    
    userModel.findOne({email: email, password: password}).then((user)=>{
        if(user){
            // token de autenticação, jwt
            const tokenBody = {
                id: user._id,
            }

            var authToken = process.env.AUTH_TOKEN

            token = jwt.sign(JSON.stringify(tokenBody), authToken)
        }else {
            sucess = false;
            type = "Erro";
            message = "Email ou senha incorretos";
        }
        res.json({
            success: sucess,
            type: type,
            message: message,
            token: token,
            user: user
        })
    }).catch((err)=>{
        res.json({success: false, type:"Erro", message: err})
    })
}