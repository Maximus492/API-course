const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({

    genre: {
        require: true,
        type: Number
    },
    genre_description: {
        require: true,
        type: String
    }
})

module.exports = mongoose.model('Genre', dataSchema)

/*
template
{
    "genre": "string",
    "genre_description": "string"
}
*/