const {exchangeNpssoForCode} = require("psn-api")
const {exchangeCodeForAccessToken} = require("psn-api")

module.exports = AuthenticationPlaystation = async(req, res, next) => {
    try {
        const myNpsso = "lPKsnWcDp32b7AYEdiKowyJy5c3cYlSnHiSUyOhVM37cls4TUssUBMxOyMFq7AGD";
        const accessCode = await exchangeNpssoForCode(myNpsso);
        req.authorization = await exchangeCodeForAccessToken(accessCode);
        next()
    }catch(error){
        console.log(error)
    }
}
