const fetch = require('node-fetch');

module.exports = getOwnedGames = async(steamId) => {
    try{
        let data = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=02EF230DE713B2F6607714BFC2F58B69&steamid=${steamId}`) 
        data = await data.json()
        return data;
        console.log(data.response.games);
    }catch(err){
        console.log(err)
    }
}
