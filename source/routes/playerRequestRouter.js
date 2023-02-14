const express = require('express')
const router = express.Router();

const createPlayerRequest = require('../controllers/playerRequest/createPlayerRequest');
const getPlayerRequest = require('../controllers/playerRequest/getPlayerRequest');
const getPlayerRequestById = require('../controllers/playerRequest/getPlayerRequestById');
const updatePlayerRequest = require('../controllers/playerRequest/updatePlayerRequest');
const deletePlayerRequest = require('../controllers/playerRequest/deletePlayerRequest');

router.post('/playerrequest/createPlayerRequest', createPlayerRequest)
router.get('/playerrequest/getPlayerRequest', getPlayerRequest)
router.get('/playerrequest/getPlayerRequestById/:userId', getPlayerRequestById)
router.put('/playerrequest/updatePlayerRequest/:id', updatePlayerRequest)
router.delete('/playerrequest/deletePlayerRequest/:id', deletePlayerRequest)

module.exports = router;