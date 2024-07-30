const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

// Single database collection for employee and admin
const userSchema = new mongoose.Schema({
    //mutual attributes between employee and admin
    userID:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {         //role: admin or employee
        type: String,
        required: true,
        default: 'employee',
    },
    //attributes specific to employee (  Requirement validation in backend )
    position: {
        type: String,
    },
    salary: {
        type: Number,
    },
    department: {
        type: String,
    },
    phone:{
        type:Number,
    },
}, 
{timestamps: true});

// Adding auto-incrementing userID field
userSchema.plugin(AutoIncrement, {inc_field: 'userID'});

const User = mongoose.model('User', userSchema);
module.exports = User;

