const express = require('express')
const app = express()
const router = express.Router();

const getOwnedGames = require('../controllers/steam/getOwnedGames');
  
router.get('/steam/findGetOwnedGames/UserId/:UserId', getOwnedGames)

module.exports = router;