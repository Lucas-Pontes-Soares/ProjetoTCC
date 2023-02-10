const express = require('express')
const router = express.Router();

const createUser = require('../controllers/user/createUser');

router.post('/user/createuser', createUser)

module.exports = router;