const express = require('express')
const app = express()
const router = express.Router();


const authToken = require('../controllers/authToken/authToken')

const getPlayerGames = require('../controllers/steam/getPlayerGames');
const getPlayerSummaries = require('../controllers/steam/getPlayerSummaries');
const getAchievementsGame = require('../controllers/steam/getAchievementsGames');

router.get('/steam/findGetPlayerGames/UserId/:UserId/:page', getPlayerGames)
router.get('/steam/findGetPlayerSummaries/UserId/:UserId', authToken, getPlayerSummaries)
router.get('/steam/findGetAchievementsGame/UserId/:UserId/Gameid/:appid', getAchievementsGame)

module.exports = router;