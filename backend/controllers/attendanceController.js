const asyncHandler = require('express-async-handler');
const Attendance  = require('../models/attendanceModel');
const Employee = require('../models/EmployeeModel')
const {addAttendanceRecord} = require('../services/AttendanceServices')

// Create or Update Attendance Record
const updateAttendance = asyncHandler (async (req, res) => {
    const { userId, date, status } = req.body;

    try {
      await addAttendanceRecord(userId, new Date(date), status);
      res.status(200).send('Attendance record updated successfully');
    } catch (error) {
      res.status(500).send('Error updating attendance record');
    }
  });

// Get Attendance Records
const getAttendance = asyncHandler(async (req, res) => {
  try {
    // Fetch all employees along with their attendance records
    const employees = await Employee.find().select('userId name attendanceRecords'); // Adjust fields as needed

    // Transform the data into the required format
    const response = employees.map(employee => ({
      userId: employee.userId,
      name: employee.name,
      attendance: employee.attendanceRecords.map(record => ({
        date: record.date,
        day: new Date(record.date).getDate(),
        status: record.status
      }))
    }));

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).send('Error fetching attendance data');
  }
});


module.exports = {updateAttendance, getAttendance};
