const mongoose = require('mongoose');

const paymentsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    userAccountNo:{
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String }
    },
});

const Payment = mongoose.model('Payment', paymentsSchema);
module.exports = Payment;