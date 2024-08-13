const mongoose = require('mongoose');


const attendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Present', 'Absent', 'Late', 'Leave'],
    default: 'Absent',
  },
});

const employeeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  attendanceRecords: [attendanceSchema], // Array of attendance records
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee


