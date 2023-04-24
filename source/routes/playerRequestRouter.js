const express = require('express')
const router = express.Router();

const createPlayerRequest = require('../controllers/playerRequest/createPlayerRequest');
const getPlayerRequest = require('../controllers/playerRequest/getPlayerRequest');
const getPlayerRequestById = require('../controllers/playerRequest/getPlayerRequestById');
const updatePlayerRequest = require('../controllers/playerRequest/updatePlayerRequest');
const deletePlayerRequest = require('../controllers/playerRequest/deletePlayerRequest');
const authToken = require('../controllers/authToken/authToken')

router.post('/playerrequest/createPlayerRequest',authToken, createPlayerRequest)
router.get('/playerrequest/getPlayerRequest', authToken, getPlayerRequest)
router.get('/playerrequest/getPlayerRequestById/:userId', authToken, getPlayerRequestById)
router.put('/playerrequest/updatePlayerRequest/:id', authToken, updatePlayerRequest)
router.delete('/playerrequest/deletePlayerRequest/:id', authToken, deletePlayerRequest)

module.exports = router;