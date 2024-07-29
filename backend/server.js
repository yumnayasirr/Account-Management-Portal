const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const colours = require('colors');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const connectDB = require('./config/db.js');
connectDB();

const port = process.env.PORT || 5000;

// Routes


//app.use(errorHandler);

app.listen(port, (res, req)=>{
    console.log(`Server is listening on port ${port}`);
})