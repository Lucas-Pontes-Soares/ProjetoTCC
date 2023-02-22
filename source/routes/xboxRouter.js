const express = require('express')
const app = express()
const router = express.Router();

const authProfile = require('../controllers/xbox/Auth');
const getAchivementsProfile = require('../controllers/xbox/getUserAchievements');
const getUserProfile = require('../controllers/xbox/getUserProfile');

router.get('/xbox/findGetUserAchievements/:loginId', authProfile, getAchivementsProfile)
router.get('/xbox/findGetUserProfile/:loginId', authProfile, getUserProfile)

module.exports = router;