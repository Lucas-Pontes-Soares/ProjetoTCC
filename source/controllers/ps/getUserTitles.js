const {exchangeNpssoForCode} = require("psn-api")
const {exchangeCodeForAccessToken} = require("psn-api")
const {makeUniversalSearch} = require("psn-api")
const {getUserTitles} = require("psn-api")

module.exports = getUserGames = async(req, res) => {
    const myNpsso = "lPKsnWcDp32b7AYEdiKowyJy5c3cYlSnHiSUyOhVM37cls4TUssUBMxOyMFq7AGD";

    const accessCode = await exchangeNpssoForCode(myNpsso);
    
    const authorization = await exchangeCodeForAccessToken(accessCode);

    
    const idUsuario = await makeUniversalSearch(
        authorization,
        "Enzoyoutuber123",
        "SocialAllAccounts"
    );

    const response = await getUserTitles(authorization, idUsuario.domainResponses[0].results[0].socialMetadata.accountId);
    res.json({jogos: response}) 
}

