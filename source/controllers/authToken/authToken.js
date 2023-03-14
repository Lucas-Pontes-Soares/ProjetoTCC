const dotenv = require('dotenv');
dotenv.config();

module.exports = authToken = async(req, res, next) => {
    // check header or url parameters or post parameters for token
    var authToken = process.env.AUTH_TOKEN
    var token = req.body.token
    // decode token
    if (token) {
    // verifies secret and checks exp
        jwt.verify(token, authToken, function (err, decoded) {
            if (err) {
                res.json({ success: false, err: "Failed to authenticate token." })
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded
                next()
            }
        })
    } else {
        res.status(403).json({
            success: false,
            err: "No token provided.",
        })
    }
}