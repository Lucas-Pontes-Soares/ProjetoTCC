var XboxApiClient = require('xbox-webapi')

module.exports = getAchievementsProfile = async(req, res) => {
    req.client.isAuthenticated().then(function(){
        console.log('User is authenticated.')
    
        req.client.getProvider('profile').getUserProfile().then(async function(result){
            console.log('resolve', result)
            res.json({profile: result}) 
        }).catch(function(error){
            console.log('reject', error)
        })
    
    }).catch(function(error){
        console.log('User is not authenticated. Run authentication flow first.', error)
    })
}