const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password, role, position, salary, department, phone } = req.body;

    // Validate input fields
    if (!name || !email || !password || !role) {
        res.status(400);
        throw new Error("All fields are required");
    }

    if (role === 'employee' && (!position || !salary || !department || !phone)) {
        res.status(400);
        throw new Error("All fields are required for an employee");
    }

    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordPattern.test(password)) {
        res.status(400);
        throw new Error("Password must be at least 8 characters long and contain at least one number and one special character");
    }

    // Check if user already exists
    const existUser = await User.findOne({ email });
    if (existUser) {
        res.status(400);
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

module.exports = { registerUser, loginUser };
