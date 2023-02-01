const PlaystationAPI = require('psn-api')
import { exchangeNpssoForCode } from "psn-api";

// This is the value you copied from the previous step.

TestePS = async(req, res) => {
    const myNpsso = "<O5hqfz67CX9w6REvJ0lw3a5XMla2FlZ5LSat6p6JHrpE6jaB8LkNFqfQMQOF6dvt>";

    // We'll exchange your NPSSO for a special access code.
    const accessCode = await exchangeNpssoForCode(myNpsso);

    // 🚀 We can use the access code to get your access token and refresh token.
    const authorization = await exchangeCodeForAccessToken(accessCode);

    const idUsuario = await makeUniversalSearch(
    authorization,
    "xelnia",
    "SocialAllAccounts"
    );

    const response = await getUserTitles(authorization, idUsuario);

    console.log(response);
}

TestePS();