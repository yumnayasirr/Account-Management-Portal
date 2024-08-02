// Middleware to authenticate admin users
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticateAdmin = async (req, res, next) => {
    console.log('hi');
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized' });
        }

        req.user = user; 
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { authenticateAdmin };
