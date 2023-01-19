const express = require('express');
const router = express();

const UserController = require('../controllers/user_controller');
const userController = new UserController();

router.post('/login', userController.login);

module.exports = router;
