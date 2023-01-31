var XboxApiClient = require('xbox-webapi')

module.exports = getAchievementsProfile = async(req, res) => {
    req.client.isAuthenticated().then(function (){
        console.log('User is authenticated.')
        //getTitleAchievements(TokenParaContinuar)
        req.client.getProvider('achievements').getTitleAchievements(32).then(async function(result){
            console.log('resolve', result)
            res.json({achievements: result}) 
        }).catch(function(error){
            console.log('reject', error)
        })
    
    }).catch(function(error){
        console.log('User is not authenticated. Run authentication flow first.', error)
    })
}

