const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    artist_id: {
        required: true,
        type: Number,
        unique: true
    },
    artist_name: {
        require: true,
        type: String
    },
    single_or_band_name: {
        require: true,
        type: String
    }
})

module.exports = mongoose.model('Artist', artistSchema)

/* template
{
    "artist_id": number,
    "artist_name": "string", 
    "single_or_band_name": "string" single or band
}
*/

/* example
{        
    "artist_id": 1,
    "artist_name": "Stone Temple Pilots", 
    "single_or_band_name": "band"
}

*/