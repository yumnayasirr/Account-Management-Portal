const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const colours = require('colors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
const connectDB = require('./config/db.js');
connectDB();

const port = process.env.PORT || 5000;

// Routes
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/evaluation');

// Error handling middleware (uncomment if you have an error handler)
// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`.green);
});

