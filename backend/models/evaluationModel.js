const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({

    userID: {
        type: Number,
        required: true,
        unique: true
    },
    TechnicalEval: {
        type: String,
        required: true
    },
    ClientEval: {
        type: String,
        required: true
    },
    evaluationDate: {
        type: Date,
        required: true
    },
}, 
{timestamps: true});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);
module.exports = Evaluation;

