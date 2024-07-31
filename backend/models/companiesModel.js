const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const companiesSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    companyId: {
        type: Number,
        required: true
    }

});

companiesSchema.plugin(autoIncrement, {inc_field: 'companyId'});
const Company = mongoose.model('Company', companiesSchema);
module.exports = Company;
