const {exchangeNpssoForCode} = require("psn-api")
const {exchangeCodeForAccessToken} = require("psn-api")

module.exports = AuthenticationPlaystation = async(req, res, next) => {
    try {
        const myNpsso = "3WZCEz6coul3xqmc5EGlsxfloYr3Xsl6Rhw4SWwFRYSHBdGnbpAlFit3LRhDNIVY";
        const accessCode = await exchangeNpssoForCode(myNpsso);
        req.authorization = await exchangeCodeForAccessToken(accessCode);

        const now = new Date();
        const expirationDate = new Date(
        now.getTime() + req.authorization.expiresIn * 1000
        ).toISOString();

        // ... some time later ...

        // Since `expirationDate` is already an ISO date string,
        // doing a comparison to see if it's expired is a one-liner.
        const isAccessTokenExpired = new Date(expirationDate).getTime() < now.getTime();

        if (isAccessTokenExpired) {
        // We'll use our refresh token to get a new access token.
        // Assuming success, this function returns an auth object
        // with the same shape as the response from `exchangeCodeForAccessToken()`.
        const updatedAuthorization = await exchangeRefreshTokenForAuthTokens(
            req.authorization.refreshToken
        );
        }
        next()
    }catch(error){
        console.log(error)
    }
}
