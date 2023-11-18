const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    albumID: {
        required: true,
        type: Number
    },
    albumName: {
        required: true,
        type: String
    },
    yearReleased: {
        required: true,
        pattern: "^\\d{2}-\\d{2}-\\d{4}$"
    },
    genres: {
        required: true,
        type: String
    },
    length: {
        required: true,
        type: Number
    },
    label: {
        required: true,
        type: String
    },
    producer: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Data', dataSchema)