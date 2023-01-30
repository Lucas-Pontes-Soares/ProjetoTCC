const fetch = require('node-fetch');

module.exports = getAchievementsGame = async(req, res) => {
    try{
        let dados = await fetch(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${req.params.appid}&key=02EF230DE713B2F6607714BFC2F58B69&steamid=${req.params.UserId}}`) 
        dados = await dados.json()
        res.json({profile: dados}) 
    }catch(err){
        console.log(err)
    }
}