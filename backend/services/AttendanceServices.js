const Employee = require('../models/EmployeeModel'); // Adjust path as necessary

const addAttendanceRecord = async (userId, date, status) => {
  try {
    console.log('USER ID: ', userId)
    const employee = await Employee.findOne({ userId });

    if (!employee) {
      throw new Error('Employee not found');
    }

    const existingRecordIndex = employee.attendanceRecords.findIndex(record => record.date.toISOString() === date.toISOString());

    if (existingRecordIndex >= 0) {
      // Update existing record
      employee.attendanceRecords[existingRecordIndex].status = status;
    } else {
      // Add new record
      employee.attendanceRecords.push({ date, status });
    }

    await employee.save();
    console.log('Attendance record updated successfully');
  } catch (error) {
    console.error('Error updating attendance record:', error);
    throw error; // Rethrow the error to handle it in the route handler
  }
};

module.exports = {
  addAttendanceRecord,
};
