var XboxApiClient = require('../../../node_modules/xbox-webapi/src/client')

module.exports = AuthUpdate = async(req, res, ne) => {
    req.client = {}
    var client = XboxApiClient({
        clientId: '5e5ead27-ed60-482d-b3fc-702b28a97404',
        userId: req.params.loginId
    })

        // User is not authenticated
        console.log('User is not authenticated. Starting flow...')
        var url = client.startAuthServer(function(){
            console.log('Authentication is done. User logged in')

            client.isAuthenticated().then(function(){
                console.log(client._authentication)
                req.client = client
            })
        })
        console.log('Open the following link to authenticate:', url)
        res.json({auth: false, type: "Informação", message: "Faça login e autorize a sua conexão do xbox pelo link: ", link: url})
}