
/*
// start of album model ******************************************************************************************start of album model //

// Post method of Album #################### Post method of Album //
http://127.0.0.1:4000/api/postAlbum
This method will create a album model.  Below is the template for creating this model.

template
{
    "album_id": number,
    "album_name": "string",
    "artist":[{"artist_id": number,"artist_name": "string"}],
    "year_released": string,    //29 Jan 1992 format, has to be string, number will not start with 0
    "genres": "string", 
    "length": number,             // number will be divided on program
    "label": "string", 
    "producer": "string", 
    "total_tracks" : number
}


// Get Methods ########################### Get Methods //

//Get All Method ///////////////////////////////////
http://127.0.0.1:4000/api/getAllAlbums
This method will get all albums within the database



// FIRST REQUEST - Get All Albums by Artist ///////
http://127.0.0.1:4000/api/getAllAlbumsByArtist/:id
where :id = artist
This method will get all the albums made by a particular artist



// SECOND REQUEST - Get All Albums by Label  ///
http://127.0.0.1:4000/api/getAllAlbumsByLabel/:id
where :id = label
This method will return all albums made by a particular label



// THIRD REQUEST - Get All Albums by Producer //
http://127.0.0.1:4000/api/getAllAlbumsByProducer/:id
where :id = producer
This method will return all albums made by a particular producer



// FOURTH REQUEST - Get One Album by AlbumID /////////
http://127.0.0.1:4000/api/getOneAlbumByAlbumID/:id
where :id = album_id
This method will return one album related to the same album_id



// FIFTH REQUEST - Get One Album by Album Name ///////
http://127.0.0.1:4000/api/getOneAlbumByAlbumName/:id
where :id = album_name
This method will return one album related to the same album name



// SIXTH REQUEST - Get One Album by mongoDBID ///////
http://127.0.0.1:4000/api/getOneAlbumByMongoDBID/:id
where :id = mongoDB id  CHECK ID
This method will return one album related to the same mongoDB ID



// Delete Methods ########################### Delete Methods //

// Delete One Album by mongoDBID //////////////////////////////
http://127.0.0.1:4000/deleteAlbumByMongoDBID/:id
where :id = mongoDB id
This method will delete one album related to the same mongoDB_id


// SEVENTH REQUEST - Delete One Album by AlbumID Method //
http://127.0.0.1:4000/api/deleteAlbumByAlbumID/:id
where :id = album_id
This method will delete one album related to the same album_id



// EIGHTH REQUEST - Delete One Album by AlbumName Method //
http://127.0.0.1:4000/api/deleteAlbumByAlbumName/:id
where :id = album_name
This method will delete one album related to the same album_name



// Update Methods ############################ Update Methods //

// Update album by mongoDBID ////////////////////
http://127.0.0.1:4000/api/updateAlbumByMongoDBID/:id
where :id = mongoDb ID
This method will update a album related to the same mongoDB id


// NINTH REQUEST - Update by album_id Method /////////
http://127.0.0.1:4000/api/updateAlbumByAlbumID/:id
where :id = album_id
This method will update a album related to the same album_id



// TENTH REQUEST - Update by album_id Method ////////
http://127.0.0.1:4000/api/updateAlbumByAlbumName/:id
where :is = album_name
This method will update a album related to the same album_name










// start of artist model ************************************************************************* start of artist model //



// Post methods #################### Post methods //
http://127.0.0.1:4000/api/postArtist
This method will create a artist model.  Below is the template for creating this model.

template
{
    "artist_id": number,
    "artist_name": "string", 
    "single_or_band_name": "string" single or band
}



// Get methods #################### Get methods ////

//Get All Artists Method ///////////////////////////////////
http://127.0.0.1:4000/api/getAllArtist
This method will return all the artist documents in the database



// Get One Artist by mongoDB id Method ///////////////////////////////////
http://127.0.0.1:4000/api/getOneArtistByMongoDBID/:id
This method will return one artist by mongo DB id.



// Delete Methods ########################### Delete Methods //

//Delete One Artist by mongoDB id Method ///////////////////////////////////
http://127.0.0.1:4000/api/deleteArtistByMongoDBID/:id
where :is = mongoDB ID
This method will delete one artist by MongoDB id



// Update methods #################### Update methods ////

//Update One Artist by mongoDB id Method ///////////////////////////////////
http://127.0.0.1:4000/api/updateArtistByMongoDBID/:id
where :is = mongoDB ID






// start of User model ************************************************************************* start of User model //



// Post methods #################### Post methods //
http://127.0.0.1:4000/api/postUser
This method will create a artist model.  Below is the template for creating this model.

template for postman

{
    "first_name":  "String",
    "last_name":  "String",
    "id": "String"
    "email":  "String",
    "password":  "String",
}
    "token":  "String" // token is generated

// Get methods #################### Get methods ////

//Get All Users Method ///////////////////////////////////
http://127.0.0.1:4000/api/getAllUser
This method will return all the User documents in the database



//Get One User by mongoDB id Method ///////////////////////////////////
http://127.0.0.1:4000/api/getOneUserByMongoDBID/:id
This method will return one User by mongo DB id.



// Delete Methods ########################### Delete Methods //

//Delete One User by mongoDB id Method ///////////////////////////////////
http://127.0.0.1:4000/api/deleteUserByMongoDBID/:id
where :is = mongoDB ID
This method will delete one User by MongoDB id



// Update methods #################### Update methods ////

//Update One User by mongoDB id Method ///////////////////////////////////
http://127.0.0.1:4000/api/updateUserByMongoDBID/:id
where :is = mongoDB ID


*/