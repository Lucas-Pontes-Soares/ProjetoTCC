const express = require('express')
const app = express()
const router = express.Router();

const getUserTitles = require('../controllers/ps/getUserTitles');

router.get('/ps/findGetUserTitles', getUserTitles)

module.exports = router;