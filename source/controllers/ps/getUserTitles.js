const {makeUniversalSearch} = require("psn-api")
const {getUserTitles} = require("psn-api")

module.exports = getUserGames = async(req, res) => {
    
    const idUsuario = await makeUniversalSearch(
        req.authorization,
        req.params.userName,
        "SocialAllAccounts"
    );
    
    const response = await getUserTitles(req.authorization, idUsuario.domainResponses[0].results[0].socialMetadata.accountId);
    res.json({games: response}) 
}

