const express = require('express')
const router = express.Router();

const createPlayerRequest = require('../controllers/playerRequest/createPlayerRequest');
const getPlayerRequest = require('../controllers/playerRequest/getPlayerRequest');
const updatePlayerRequest = require('../controllers/playerRequest/updatePlayerRequest');
const deletePlayerRequest = require('../controllers/playerRequest/deletePlayerRequest');

router.post('/playerrequest/createPlayerRequest', createPlayerRequest)
router.get('/playerrequest/getPlayerRequest', getPlayerRequest)
router.put('/playerrequest/updatePlayerRequest/:id', updatePlayerRequest)
router.delete('/playerrequest/deletePlayerRequest/:id', deletePlayerRequest)

module.exports = router;