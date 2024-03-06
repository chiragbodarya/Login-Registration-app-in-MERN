const mongoose = require('mongoose')

const EmploySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const EmployModel = mongoose.model('employ', EmploySchema);
module.exports = EmployModel;