const {exchangeNpssoForCode} = require("psn-api")
const {exchangeCodeForAccessToken} = require("psn-api")

module.exports = AuthenticationPlaystation = async(req, res, next) => {
    try {
        const myNpsso = "7E6IDO86dVmBfUbswOmHyW8GDNSJk645YkQFNHH2EWKr5KoFv6cyqW87leeWbWvf";
        const accessCode = await exchangeNpssoForCode(myNpsso);
        req.authorization = await exchangeCodeForAccessToken(accessCode);
        next()
    }catch(error){
        console.log(error)
    }
}
