const fetch = require('node-fetch');

module.exports = getPlayerGames = async(req, res) => {
    try{
        console.log(req.params.UserId)
        let dados = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=02EF230DE713B2F6607714BFC2F58B69&steamid=${req.params.UserId}`) 
        dados = await dados.json()

        //dados.response.games_count
        let gamePopulate = {}

        //variaveis para controlar a exibição apenas de 100 jogos por vez

        //console.log(dados)
        Promise.all(dados.response.games.filter((numeroJogoAtual, idx) => idx < 100).map(async(game)=>{
            //api para buscar nome e imagem do jogo
            
            try {
                let dataGame = await fetch(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`);
                if (dataGame.status === 200) {
                  dataGame = await dataGame.json();
                  //console.log(dataGame);
                  
                  // Se você chegou até aqui, os dados da API são válidos, e você pode continuar o processamento
                  let achivementGame = await fetch(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${game.appid}&key=02EF230DE713B2F6607714BFC2F58B69&steamid=${req.params.UserId}`);
                  achivementGame = await achivementGame.json();
                  
                if(dataGame[game.appid].length == 0 ||  dataGame[game.appid].success == "false"){
                    console.log("Erro!")
                }else{
                        gamePopulate = {
                            appid: game.appid,
                            title: achivementGame.playerstats.gameName  || "",
                            image: dataGame[game.appid]?.data?.header_image || "",
                        }
                        gameAchivements = {
                            achivement: achivementGame.playerstats.achievements,
                        }
                        game.gameInfo = gamePopulate
                        game.gameAchivement = gameAchivements 
                    
                }
                } else {
                  console.log("Erro ao buscar dados do jogo:", dataGame.status);
                  return
                }
              } catch (error) {
                console.error("Erro ao buscar dados do jogo:", error.message);
                return
              }

        })).then(()=>{
            res.json({games: dados.response.games})
        })
    }catch(err){
        console.log(err)
    }
}