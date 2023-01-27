const fetch = require('node-fetch');

module.exports = getOwnedGames = async(req, res) => {
    try{
        console.log(req.params.UserId)
        let dados = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=02EF230DE713B2F6607714BFC2F58B69&steamid=${req.params.UserId}`) 
        dados = await dados.json()
        
        let gamePopulate = {}
        Promise.all(dados.response.games.map(async(game)=>{
            console.log(game.appid)
            let dataGame = await fetch(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`) 
            dataGame = await dataGame.json()
            if(dataGame[game.appid] == null){
                console.log("Erro!")
            }else{
                gamePopulate = {
                    appid: game.appid,
                    title: dataGame[game.appid]?.data?.name || "",
                    image: dataGame[game.appid]?.data?.header_image || "",
                }

                game.gameInfo = gamePopulate
            }
            
        })).then(()=>{
            res.json({games: dados.response.games}) 
        })
    }catch(err){
        console.log(err)
    }
}
