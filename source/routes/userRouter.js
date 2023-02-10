const express = require('express')
const router = express.Router();

const createUser = require('../controllers/user/createUser');
const loginUser = require('../controllers/user/loginUser');

router.post('/user/createuser', createUser)
router.post('/user/loginuser', loginUser)

module.exports = router;