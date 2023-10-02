const {exchangeNpssoForCode} = require("psn-api")
const {exchangeCodeForAccessToken} = require("psn-api")

module.exports = AuthenticationPlaystation = async(req, res, next) => {
    try {
        const myNpsso = "T9VDd7nTKCnjwTlYoYyCgUgZeXS7vjWZDrzyIzRi1dyo7ZjzRP4719j9jCgLKVsp";
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
