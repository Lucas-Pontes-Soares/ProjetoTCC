const fetch = require('node-fetch');

module.exports = getPlayerGames = async(req, res) => {
    try{
        console.log(req.params.UserId)
        let dados = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=02EF230DE713B2F6607714BFC2F58B69&steamid=${req.params.UserId}`) 
        dados = await dados.json()

        let gamePopulate = {}
        Promise.all(dados.response.games.map(async(game)=>{

            //api para buscar nome e imagem do jogo
            let dataGame = await fetch(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`) 
            if(dataGame){
                dataGame = await dataGame.json()
            }

            //api para buscar as conquistas do jogo
            let achivementGame = await fetch(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${game.appid}&key=02EF230DE713B2F6607714BFC2F58B69&steamid=${req.params.UserId}}`) 
            achivementGame = await achivementGame.json()

            //verifica se é um jogo, ou uma dlc que não possui dados
            if(dataGame[game.appid].success == "false"){
                console.log("Erro!")
            }else{
                gamePopulate = {
                    appid: game.appid,
                    title: dataGame[game.appid]?.data?.name  || "",
                    image: dataGame[game.appid]?.data?.header_image || "",
                }
                gameAchivements = {
                    achivement: achivementGame.playerstats.achievements,
                }
                game.gameInfo = gamePopulate
                game.gameAchivement = gameAchivements
            }

        })).then(()=>{
            res.json({games: dados.response.games}) 
        })
    }catch(err){
        console.log(err)
    }
}