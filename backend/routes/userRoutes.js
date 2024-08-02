const {registerUser, loginUser, updateEmployee} = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.put('/update/:userID' ,updateEmployee);
module.exports = router;
