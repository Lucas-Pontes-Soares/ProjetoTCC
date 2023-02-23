const { trusted } = require('mongoose')
var XboxApiClient = require('xbox-webapi')

module.exports = getAchievementsProfile = async(req, res) => {
    req.client.isAuthenticated().then(function (){
        console.log('User is authenticated.')

        const games = []
        //getTitleAchievements(TokenParaContinuar)
        req.client.getProvider('achievements').getTitleAchievements(0).then(async function(result){
            Promise.all(result.titles.map(async(game)=>{
                //console.log('resolve', game.titleId) = ids dos jogos
                //buscar imagens por cada id de jogo
                return req.client.getProvider('titlehub').getTitleId(game.titleId).then(function(titleDetails){
                    game.image = titleDetails.titles[0].displayImage;
                    //console.log(game)
                    games.push(game)
                    //titleDetails.titles[0].image = titleDetails.titles[0].displayImage
                }).catch(function(error){
                    res.json({success: false, message: "Imagem do jogo não encontrada", err: err.message})
                }) 
            })).then(()=>{
                res.json({sucess: true, message: games})
            }) 
        }).catch(function(error){
            res.json({success: false, message: "Jogos não encontrados", err: err.message})
        })
    }).catch(function(error){
        console.log('User is not authenticated. Run authentication flow first.', error)
    })
}

