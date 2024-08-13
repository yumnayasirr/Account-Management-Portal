const User = require('../models/userModel');
const Employee = require('../models/EmployeeModel');


const migrateUsersToEmployees = async () => {
  try {
    // Find all users
    const users = await User.find();

    // Map users to employees
    const employees = users.map(user => ({
      userId: user.userID,
      name: user.name,
      attendanceRecords: []
    }));

    // Insert employees into employees collection
    await Employee.insertMany(employees);

    console.log('Employees migrated successfully');
  } catch (error) {
    console.error('Error migrating employees:', error);
  } finally {
    
  }
};

module.exports= {migrateUsersToEmployees};
