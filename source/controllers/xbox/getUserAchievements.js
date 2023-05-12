const { trusted } = require('mongoose')
var XboxApiClient = require('xbox-webapi')

module.exports = getAchievementsProfile = async(req, res) => {
    req.client.isAuthenticated().then(function (){
        console.log('User is authenticated.')

        const games = []
        //getTitleAchievements(TokenParaContinuar)
        req.client.getProvider('achievements').getTitleAchievements(req.headers.limit).then(async function(result){
            console.log(result.titles.length)
            Promise.all(result.titles.map(async(game)=>{
                //console.log('resolve', game.titleId) = ids dos jogos
                //buscar imagens por cada id de jogo
                await req.client.getProvider('titlehub').getTitleId(game.titleId)
                .then(function(titleDetails){
                    game.image = titleDetails.titles[0].displayImage || "";
                    games.push(game)
                    //titleDetails.titles[0].image = titleDetails.titles[0].displayImage
                }).catch(function(err){
                    game.image = "";
                    games.push(game)
                   console.log("Imagem do jogo não buscada! "+ err.message + game.titleId);
                }) 
            })).then(()=>{
                res.json({sucess: true, message: games})
            }) 
        }).catch(function(err){
            res.json({success: false, message: "Jogos não encontrados", err: err.message})
        })
    }).catch(function(error){
        console.log('User is not authenticated. Run authentication flow first.', error)
    })
}

