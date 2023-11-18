
const express = require('express');
const Model = require('../model/model');
const Album = require('../model/album');
const Artist = require('../model/artist');
const User = require('../model/user');
const router = express.Router();



// start of album model ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////// start of album model //

//Post method
router.post('/postAlbum', async (req, res) => {
    const data = new Album({
        album_id: req.body.album_id,
        album_name: req.body.album_name,
        artist: req.body.artist,
        year_released: req.body.year_released, 
        genres: req.body.genres, 
        length: req.body.length, 
        label: req.body.label, 
        producer: req.body.producer, 
        total_tracks: req.body.total_tracks
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
        console.log(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get All Method
router.get('/getAllAlbums', async (req, res) => {
    try{
        const data = await Album.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get All Albums by Artist (FIRST REQUEST)
router.get('/getAllAlbumsByArtist/:id', async (req, res) => {
    try{
        const data = await Album.find({"artist.artist_name": req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get by All Albums by Label (SECOND REQUEST)
router.get('/getAllAlbumsByLabel/:id', async (req, res) => {
    try{
        const data = await Album.find({label: req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get by All Albums by Producer (THIRD REQUEST)
router.get('/getAllAlbumsByProducer/:id', async (req, res) => {
    try{
        const data = await Album.find({producer: req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get One Album by AlbumID Method (FOURTH REQUEST)
router.get('/getOneAlbumByAlbumID/:id', async (req, res) => {
    try{
        const data = await Album.find({album_id: req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get One Album by Album Name (FIFTH REQUEST)
router.get('/getOneAlbumByAlbumName/:id', async (req, res) => {
    try{
        const data = await Album.find({album_name: req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get One Album by mongoDBID Method (SIXTH REQUEST)
router.get('/getOneAlbumByMongoDBID/:id', async (req, res) => {
    try{
        const data = await Album.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete Album by mongoDBID Method 
router.delete('/deleteAlbumByMongoDBID/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Album.findByIdAndDelete(id);
        res.send(`Album with ${data.album_name} has been deleted..`);
    }  //  IMPORTANT use ` not ' so ${data.name} is read properly
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Delete Album by AlbumID Method (SEVENTH REQUEST) 
router.delete('/deleteAlbumByAlbumID/:id', async (req, res) => {
    try{
        //const id = req.params.id;
        const data = await Album.findOneAndDelete({album_id: req.params.id});
        res.send(`Album with name - ${data.album_name} - has been deleted..`);
    }  //  IMPORTANT use ` not ' so ${data.name} is read properly
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Delete Album by AlbumName Method (EIGHTH REQUEST) 
router.delete('/deleteAlbumByAlbumName/:id', async (req, res) => {
    try{
        //const id = req.params.id;
        const data = await Album.findOneAndDelete({album_name: req.params.id});
        res.send(`Album with name - ${data.album_name} - has been deleted..`);
    }  //  IMPORTANT use ` not ' so ${data.name} is read properly
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Update by ID Method  
router.patch('/updateAlbumByMongoDBID/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(id, updatedData, options);
        res.json(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Update by album_id Method (NINTH REQUEST) NEED WORK CHECK ERROR NUMBER FOR UPDATES AND DELETE
 router.patch('/updateAlbumByAlbumID/:id', async (req, res) => {
    try{
        //const id = req.params.id; // don't know why id not read
        const updatedData = req.body;
        const options = { new: true };
        const result = await Album.findOneAndUpdate({album_id: req.params.id}, updatedData, options);
        res.json(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Update by album_id Method (TENTH REQUEST) NEED WORK
router.patch('/updateAlbumByAlbumName/:id', async (req, res) => {
    try{
        //const id = req.params.id; // don't know why id not read
        const updatedData = req.body;
        const options = { new: true };
        const result = await Album.findOneAndUpdate({album_name: req.params.id}, updatedData, options);
        res.json(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

// end of album model ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////// end of album model //





// start of artist model ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////// start of artist model //

//Post method
router.post('/postArtist', async (req, res) => {
    const data = new Artist({
        artist_id: req.body.artist_id,
        artist_name:req.body.artist_name, 
        single_or_band_name:req.body.single_or_band_name 
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
        console.log(dataToSave)

    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get All Method
router.get('/getAllArtist', async (req, res) => {
    try{
        const data = await Artist.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method TEST
router.get('/getOneArtistByMongoDBID/:id', async (req,res) => {
    try{
        const data = await Artist.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete by ID method
router.delete('/deleteArtistByMongoDBID/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Artist.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`);
    }  //  IMPORTANT use ` not ' so ${data.name} is read properly
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/updateArtistByMongoDBID/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Artist.findByIdAndUpdate(id, updatedData, options);
        res.json(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

// end of artist model ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////// end of artist model //






// start of user model ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////// start of user model //

//Post method
router.post('/postUser', async (req, res) => {

    const data = new User({
        id: req.body.id,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
        console.log(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Get All Method
router.get('/getAllUser', async (req, res) => {
    try{
        const data = await User.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOneUser/:id', async (req,res) => {
    try{
        const data = await User.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete by ID method
router.delete('/deleteUserByMongoDBID/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id);
        res.send(`Document with ${data.name} has been deleted..`);
    }  //  IMPORTANT use ` not ' so ${data.name} is read properly
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/updateUserByMongoDBID/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(id, updatedData, options);

        res.json(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

// end of user model ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////// end of user model //

module.exports = router;