const express = require('express')
const router = express.Router();

const createUser = require('../controllers/user/createUser');
const getUser = require('../controllers/user/getUser');
const loginUser = require('../controllers/user/loginUser');
const updateUser = require('../controllers/user/updateUser');
const deleteUser = require('../controllers/user/deleteUser');

router.post('/user/createuser', createUser)
router.get('/user/getUser/:id', getUser)
router.post('/user/loginuser', loginUser)
router.put('/user/updateUser/:id', updateUser)
router.delete('/user/deleteUser/:id', deleteUser)

module.exports = router;