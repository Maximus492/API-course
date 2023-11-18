const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        required: true,
        type: String
    },
    last_name: {
        required: true,
        type: String
    },
    id: {
        required: true,
        type: Number,
        unique: true
    },   
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        require: true,
        type: String
    },
    token: {
        type: String
    }
})

module.exports = mongoose.model('user', userSchema)