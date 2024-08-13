const mongoose = require('mongoose');
const Attendance = require('../models/attendanceModel'); // Adjust the path as needed
const moment = require('moment'); // For date manipulation
const User = require('../models/userModel');

const populatePreviousDaysAttendance = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI
, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const startDate = moment().subtract(1, 'month').startOf('month').toDate();
    const endDate = moment().subtract(1, 'month').endOf('month').toDate();
    const employees = await User.find({}); // Implement this function to fetch all employees

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      for (const employee of employees) {
        const record = await Attendance.findOne({ employeeID: employee.userId, date: date });
        if (!record) {
          await Attendance.create({
            userId: employee.userId,
            date: new Date(date),
            status: 'Absent' // Default status or based on your logic
          });
        }
      }
    }

    console.log('Attendance records populated successfully.');
  } catch (error) {
    console.error('Error populating attendance records:', error);}
  // } finally {
  //   await mongoose.disconnect();
  // }
};


module.exports = populatePreviousDaysAttendance;
