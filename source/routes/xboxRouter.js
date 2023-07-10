const express = require('express')
const app = express()
const router = express.Router();

const authProfile = require('../controllers/xbox/Auth');
const getAchivementsProfile = require('../controllers/xbox/getUserAchievements');
const getUserProfile = require('../controllers/xbox/getUserProfile');
const authUpdate = require ('../controllers/xbox/AuthUpdate');

router.get('/xbox/findGetUserAchievements/:loginId', authProfile, getAchivementsProfile)
router.get('/xbox/findGetUserProfile/:loginId', authProfile, getUserProfile)
router.get('/xbox/authUpdate/:loginId', authUpdate)
module.exports = router;