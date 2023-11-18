// new token code below
require("dotenv").config();
require("../config/database").connect();
const express = require('express');
const Album = require('../model/album');
const Artist = require('../model/artist');
const User = require('../model/user');

//const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// importing user contact
//const User = require("./models/user");
const auth = require("../middleware/auth");

const app = express();

//app.use('/api', routes);  // ideally want this but will code this for the future
app.use(express.json());



// start of album model ///////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////// start of album model //

//Post method
app.post('/api/postAlbum', auth, async (req, res) => {
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
app.get('/api/getAllAlbums', auth, async (req, res) => {
    try{
        const data = await Album.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get All Albums by Artist (FIRST REQUEST)
app.get('/api/getAllAlbumsByArtist/:id', auth, async (req, res) => {
    try{
        const data = await Album.find({"artist.artist_name": req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get by All Albums by Label (SECOND REQUEST)
app.get('/api/getAllAlbumsByLabel/:id', auth, async (req, res) => {
    try{
        const data = await Album.find({label: req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get by All Albums by Producer (THIRD REQUEST)
app.get('/api/getAllAlbumsByProducer/:id', auth, async (req, res) => {
    try{
        const data = await Album.find({producer: req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get One Album by AlbumID Method (FOURTH REQUEST)
app.get('/api/getOneAlbumByAlbumID/:id', auth, async (req, res) => {
    try{
        const data = await Album.find({album_id: req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get One Album by Album Name (FIFTH REQUEST)
app.get('/api/getOneAlbumByAlbumName/:id', auth, async (req, res) => {
    try{
        const data = await Album.find({album_name: req.params.id});
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get One Album by mongoDBID Method (SIXTH REQUEST)
app.get('/api/getOneAlbumByMongoDBID/:id', auth, async (req, res) => {
    try{
        const data = await Album.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete Album by mongoDBID Method 
app.delete('/api/deleteAlbumByMongoDBID/:id', auth, async (req, res) => {
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
app.delete('/api/deleteAlbumByAlbumID/:id', auth, async (req, res) => {
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
app.delete('/api/deleteAlbumByAlbumName/:id', auth, async (req, res) => {
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
app.patch('/api/updateAlbumByMongoDBID/:id', auth, async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const result = await Album.findByIdAndUpdate(id, updatedData, options);
        res.json(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Update by album_id Method (NINTH REQUEST) NEED WORK CHECK ERROR NUMBER FOR UPDATES AND DELETE
 app.patch('/api/updateAlbumByAlbumID/:id', auth, async (req, res) => {
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
app.patch('/api/updateAlbumByAlbumName/:id', auth, async (req, res) => {
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
app.post('/api/postArtist', auth, async (req, res) => {
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
app.get('/api/getAllArtist', auth, async (req, res) => {
    try{
        const data = await Artist.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method TEST
app.get('/api/getOneArtistByMongoDBID/:id', auth, async (req,res) => {
    try{
        const data = await Artist.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete by ID method
app.delete('/api/deleteArtistByMongoDBID/:id', auth, async (req, res) => {
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
app.patch('/api/updateArtistByMongoDBID/:id', auth, async (req, res) => {
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

// Register User
app.post("/api/register", async (req, res) => {
    //our register logic goes here
    try{
        const { first_name, last_name, id, email, password} = req.body;
        if (!(email && password && id && first_name && last_name)){
            res.status(400).send("All input is required");
        }
        const oldUser = await User.findOne({ email });
        if (oldUser){
            return res.status(400).send("User Already Exist. Please Login");
        }
        encryptedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            first_name,
            last_name,
            id,
            email: email.toLowerCase(), // sanitize: convert email to lower case
            password: encryptedPassword, 
        })
        const token = jwt.sign(
            { user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        //save user token
        user.token = token;
        //return new user
        res.status(201).json(user);
    }
    catch(err) {
        console.log(err);
    }
});

// Login User
app.post("/api/login", async (req, res) => {
    //our logic goes here
        try {
        const { email, password } = req.body;
        
        if (!(email && password)){
            res.status(400).send("All input is required");
        }
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
                const token = jwt.sign(
                { user_id: user._id, email},   
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token;
            res.status(200).json(user);
        }
        res.status(400).send("Invalid Credential"); //possibly add this in future with logic 'if else'
    } catch (error) {
        console.log(error);
    }
});


// Welcome User
app.post("/api/welcome", auth, (req, res) => {
    res.status(200).send("Welcome");
    // might need code here if not authenication
});

//Get All Method
app.get('/api/getAllUser', auth, async (req, res) => {
    try{
        const data = await User.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
app.get('/api/getOneUserByMongoDBID/:id', auth, async (req,res) => {
    try{
        const data = await User.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete by ID method
app.delete('/api/deleteUserByMongoDBID/:id', auth, async (req, res) => {
    try{
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id);
        res.send(`Document has been deleted..`);
    }  //  IMPORTANT use ` not ' so ${data.name} is read properly
    catch(error){
        res.status(400).json({message: error.message})
    }
})

//Update by ID Method
app.patch('/api/updateUserByMongoDBID/:id', auth, async (req, res) => {
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

module.exports = app;