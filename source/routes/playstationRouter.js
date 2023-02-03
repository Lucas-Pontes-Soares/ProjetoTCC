const express = require('express')
const app = express()
const router = express.Router();

const authPlaystation = require('../controllers/ps/Auth');
const getUserTitles = require('../controllers/ps/getUserTitles');
const getUserProfile = require('../controllers/ps/getUserProfiles');

router.get('/ps/findGetUserTitles/:userName', authPlaystation, getUserTitles)
router.get('/ps/findGetUserProfiles/:userName', authPlaystation, getUserProfile)

module.exports = router;