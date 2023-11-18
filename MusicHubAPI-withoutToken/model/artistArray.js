const mongoose = require('mongoose');

const dataSchema3 = new mongoose.Schema({

    artist: [
        {
        artist_id: {
        required: true,
        type: Number
        },
        artist_name: {
        required: true,
        type: String
        }
    }
    ], 
})

module.exports = mongoose.model('AlbumArtistArray', dataSchema3)