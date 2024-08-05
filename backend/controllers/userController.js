const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = asyncHandler(async (req, res) => {
    console.log('Register User endpoint hit');
    const { name, email, password, role, position, salary, department, phone } = req.body;
    
    console.log('Request body:', req.body);

    // Validate input fields
    if (!name || !email || !password || !role) {
        res.status(400);
        console.log('Missing required fields');
        throw new Error("All fields are required");
    }

    if (role === 'employee' && (!position || !salary || !department || !phone)) {
        res.status(400);
        console.log('Missing employee specific fields');
        throw new Error("All fields are required for an employee");
    }

    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordPattern.test(password)) {
        res.status(400);
        console.log('Password does not meet criteria');
        throw new Error("Password must be at least 8 characters long and contain at least one number and one special character");
    }

    // Check if user already exists
    const existUser = await User.findOne({ email });
    if (existUser) {
        res.status(400);
        console.log('User already exists');
        throw new Error("User already exists");
    }

    // Hash the password
    const hashPass = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashPass,
        role,
        position: role === 'employee' ? position : undefined,
        salary: role === 'employee' ? salary : undefined,
        department: role === 'employee' ? department : undefined,
        phone: role === 'employee' ? phone : undefined,
    });

    // Generate token
    const token = await generateToken(user._id);

    // Respond with user and token
    console.log('User registered successfully:', user);
    res.status(200).json({ user, token });
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = await generateToken(user._id);
        res.status(200).json({ user, token });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

// Generate Token
const generateToken = async (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// Get all users
const getUsers = asyncHandler(async(req, res)=>{
    const users = await User.find({})
    res.status(200).json(users);
});

//Get all employees
const getEmployees = asyncHandler(async(req, res)=>{
    const employees = await User.find({role: 'employee'})
    res.status(200).json(employees);
});

//Update Employee details
updateEmployee = asyncHandler(async (req, res) => {
    const { userID } = req.params;
    console.log(userID);
  
    // Find the user by userID
    const user = await User.findOne({ userID });
    console.log(user)
    if (!user) {
      res.status(404);
      throw new Error("Employee not found");
    }
  
    // Update the user and return the updated data
    const updatedEmployeeInfo = await User.findOneAndUpdate(
      { userID },
      req.body,
      { new: true }
    );
  
    res.status(200).json(updatedEmployeeInfo);
  });

module.exports = { registerUser, loginUser, getUsers, getEmployees, updateEmployee };
