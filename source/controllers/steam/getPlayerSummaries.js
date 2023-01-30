const fetch = require('node-fetch');

module.exports = getPlayerSummaries = async(req, res) => {
    try{
        let dados = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=02EF230DE713B2F6607714BFC2F58B69&steamids=${req.params.UserId}`) 
        dados = await dados.json()
        res.json({achievements: dados}) 
    }catch(err){
        console.log(err)
    }
}
