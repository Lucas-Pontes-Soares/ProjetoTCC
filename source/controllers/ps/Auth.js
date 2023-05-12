const {exchangeNpssoForCode} = require("psn-api")
const {exchangeCodeForAccessToken} = require("psn-api")

module.exports = AuthenticationPlaystation = async(req, res, next) => {
    try {
        const myNpsso = "XhdMwQ4wQh76gR03Da8ICdOpf8kHkd7HK648qxpYwFTXMZuJmPkOiiRXy3Xc40NM";
        const accessCode = await exchangeNpssoForCode(myNpsso);
        req.authorization = await exchangeCodeForAccessToken(accessCode);
        next()
    }catch(error){
        console.log(error)
    }
}
