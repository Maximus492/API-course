
/**/
const http = require("http");
//const app = require("./app");
const app = require("./routes/routes");  // need to change this
// app.use('/api', routes);  ADD THIS

//const server = require("http").createServer(app);
const server = http.createServer(app);


//add the routes file to the express server



const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

//app.use('/api', routes);


// server listening
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

















/*
//adding express and mongoose to this file and assign variables  
const express = require('express');
const mongoose = require('mongoose');
// add the routes file in the routes folder to constant variable
const routes = require('./routes/routes')


//reading the contents of .env file
require('dotenv').config();

//store the string DATABASE_URL to a constant called mongoData 
const mongoData = process.env.MONGO_URI; 

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
*/
/*
app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)  // //  IMPORTANT use ` not ' so ${4000} is read properly
})
*/















