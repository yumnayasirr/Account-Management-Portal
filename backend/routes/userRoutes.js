const {registerUser, loginUser, getUsers} = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/').get(getUsers);

module.exports = router;
