const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    evaluation: {
        type: String,
        required: true
    },
    evaluationTime: {
        type: String,
        required: true
    },
}, 
{timestamps: true});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);
module.exports = Evaluation;

