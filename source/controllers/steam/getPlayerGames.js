const fetch = require('node-fetch');

module.exports = getPlayerGames = async(req, res) => {
    try{
        //exibir apenas 50 jogos por pagina
        const gamesPerPage = 50;

        //transformar string para int
        req.params.page = parseInt(req.params.page);
        console.log(req.params.page)
        page = req.params.page

        // Calcular o índice inicial e final com base na página e jogos por página
        const startIndex = (page - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        
        console.log(req.params.UserId)
        let dados = await fetch(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=02EF230DE713B2F6607714BFC2F58B69&steamid=${req.params.UserId}`) 
        dados = await dados.json()

        //dados.response.games_count
        let gamePopulate = {}

        if (dados.response.games) {
            //pegar apenas os 50
            let gamesReduzido = dados.response.games.slice(startIndex, endIndex);
            //console.log(gamesReduzido)

            const gamesComPropriedades = gamesReduzido.map(async(game)=>{
                //api para buscar nome e imagem do jogo
                try {
                    let dataGame = await fetch(`https://store.steampowered.com/api/appdetails?appids=${game.appid}`);
                    //console.log(dataGame)
                    if (dataGame.status === 200 && dataGame.statusText == "OK") {
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
                                title: dataGame[game.appid]?.data?.name || "nada",
                                image: dataGame[game.appid]?.data?.header_image || "nada",
                            }
                            gameAchivements = {
                                achivement: achivementGame.playerstats.achievements,
                            }
                            game.gameInfo = gamePopulate
                            game.gameAchivement = gameAchivements 

                            return game
                    }
                    } else {
                      console.log("Erro ao buscar dados do jogo, status:", dataGame.status);

                        gamePopulate = {
                            appid: "Limite de requisições alcançado",
                            title: "Limite de requisições alcançado",
                            image: "Limite de requisições alcançado",
                        }
                        gameAchivements = {
                            achivement: "Limite de requisições alcançado",
                        }
                        game.gameInfo = gamePopulate
                        game.gameAchivement = gameAchivements 

                        return game
                    }
                  } catch (error) {
                    console.error("Erro ao buscar dados do jogo, mensagem:", error.message);
                    return
                  }
    
            })
            const gamesComPropriedadesFinais = await Promise.all(gamesComPropriedades);
            console.log("Lenght: " + gamesComPropriedadesFinais.length)

            res.json({
                games: gamesComPropriedadesFinais,
                nextPage: page + 1
            })
        }
    }catch(err){
        console.log(err)
    }
}