const { getProfileFromUserName } = require("psn-api");

module.exports = getUserProfile = async(req, res) => {
    const response = await getProfileFromUserName(req.authorization, req.params.userName)
    res.json({profile: response}) 
}

