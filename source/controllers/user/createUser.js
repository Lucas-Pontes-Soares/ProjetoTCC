const userModel = require("../../database/models/usuario")

module.exports = createUser = async(req, res) => {
    const email = req.body.email
    const body = req.body
    const nick = req.body.nick
    userModel.findOne({$or: [
        {email: email},
        {nick: nick}
    ]}).then((user)=>{
        if(!user){
            // Os campos email e nick estão disponíveis
            userModel.create(body).then((users)=>{
                res.json({success: true, message: "Usuario criado", user: users})
            }).catch((err)=>{
                res.json({success: false, message: "Usuario não criado", err: err.message})
            })
        } else {
           // Pelo menos um dos campos email ou nick já está em uso
            let message = "Usuário não criado, ";
            if(user.email === email && user.nick === nick) {
                message += "este email e nick já estão em uso";
            } else if (user.email === email) {
                message += "esse email já está em uso";
            } else if(user.nick === nick) {
                message += "esse nick já está em uso";
            }
            res.json({success: false, message: message});
        }
    })
}