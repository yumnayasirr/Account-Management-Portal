const express = require('express');
const router = express.Router();
const { updateAttendance, getAttendance } = require('../controllers/attendanceController');


router.route('/').post(updateAttendance)
router.route('/').get(getAttendance);

module.exports = router