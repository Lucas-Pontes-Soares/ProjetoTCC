const express = require('express')
const router = express.Router();

const authToken = require('../controllers/authToken/authToken')

const createUser = require('../controllers/user/createUser');
const getAllUsers = require('../controllers/user/getAllUsers');
const getUser = require('../controllers/user/getUser');
const getUserProfileByNick = require('../controllers/user/getUserbyNick');
const loginUser = require('../controllers/user/loginUser');
const updateUser = require('../controllers/user/updateUser');
const deleteUser = require('../controllers/user/deleteUser');

router.post('/user/createuser', createUser)
router.get('/user/getUser/:id', authToken, getUser)
router.get('/user/getUserByNick/:nickURL', authToken, getUserProfileByNick)
router.get('/user/getAllUsers/:nickDigitado', authToken, getAllUsers)
router.post('/user/loginuser', loginUser)
router.put('/user/updateUser/:id', authToken, updateUser)
router.delete('/user/deleteUser/:id', authToken, deleteUser)

module.exports = router;