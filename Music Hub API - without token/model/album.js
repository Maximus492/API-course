const mongoose = require('mongoose');

const artisting = new mongoose.Schema({
        artist_id: {
        required: true,
        type: Number
        },
        artist_name: {
        required: true,
        type: String
        } 
})


const albumSchema = new mongoose.Schema({
    album_id: {
        required: true,
        type: Number,
        unique: true
    },
    album_name: {
        required: true,
        type: String,
        unique: true
    },
    artist: [artisting],
    year_released: {
        required: true,
        type: String
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
    total_tracks: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Album', albumSchema)



/* template
"album_id": ,                        // int
"album_name": "",                    // string
"artist": "",                       // string
"artist": [
    {
      "artist_id": 6,               // string
      "artist_name": ""             // int
    },
  ],
"year_released": 00-00-0000,        // string
"genres": "",                       // string
"length": ,                         // int
"label": "",                        // string
"producer": ""                      // string
"total_tracks": ,                   // int
*/

/* example
{
    "album_id": 1,
    "album_name": "Core",
    "artist":[{"artist_id": 1,"artist_name": "Stone Temple Pilots"}],
    "year_released": 29091992, 
    "genres": "Grunge", 
    "length": 5339, 
    "label": "Atlantic", 
    "producer": "Brendan O'Brian", 
    "total_tracks" : 12
}
*/