const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },   
    email: {
        required: true,
        type: String
    },
    password: {
        require: true,
        type: String
    }
})

module.exports = mongoose.model('User', dataSchema)