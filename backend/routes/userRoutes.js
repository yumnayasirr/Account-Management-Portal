const {registerUser, loginUser, getUsers, getEmployees, updateEmployee} = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/').get(getUsers);
router.route('/employees').get(getEmployees);
router.route('/employees/:userID').put(updateEmployee);


module.exports = router;
