//adding express and mongoose to this file and assign variables  
const express = require('express');
const mongoose = require('mongoose');
// add the routes file in the routes folder to constant variable
const routes = require('./routes/routes')

//reading the contents of .env file
require('dotenv').config();

//store the string DATABASE_URL to a constant called mongoData 
const mongoData = process.env.DATABASE_URL; 

//'database connection'
mongoose.connect(mongoData);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
    console.log("here")
})

database.once('connected', () => {
    console.log("Database Connected");
})

//transfering of express to a new constant called app 
const app = express();
app.use(express.json());
//add the routes file to the express server
app.use('/api', routes);


app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)  // //  IMPORTANT use ` not ' so ${4000} is read properly
})
















