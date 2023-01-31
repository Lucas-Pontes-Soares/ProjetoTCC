const express = require('express')
const app = express()
const router = express.Router();

const getAchivementsProfile = require('../controllers/xbox/getUserAchievements');
const authProfile = require('../controllers/xbox/Auth');

router.get('/xbox/findGetPlayerAchievements', authProfile, getAchivementsProfile)

module.exports = router;