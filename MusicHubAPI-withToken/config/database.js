const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
    // Connecing to the database
    mongoose
        .connect(MONGO_URI, {
         useNewUrlParser: true,
         //useUnifiedTopolgy: true,  // MongoParseError: option useunifiedtopolgy is not supported, no longer supported
        })
        .then(() => {
         console.log("Successfully connected to database");
        })
        .catch((error) => {
         console.log("database connection failed, exiting now...");
         console.error(error);
         process.exit(1);
        });
};




/*
require('dotenv').config();

//store the string DATABASE_URL to a constant called mongoData 
const mongoData = process.env.DATABASE_URL; 

//databaae connection
mongoose.connect(mongoData);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
    console.log("here")
})

database.once('connected', () => {
    console.log("Database Connected");
})
*/
/*
const mongoData = process.env

const { MONGO_URI } = process.env;

    exports.connect = () => {

        mongoose        
            .connect(MONGO_URI,{
            })
            .then(() => {
                console.log(`Successfull connected to database`);
            })

    }




const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
    // Connecing to the database
    mongoose
        .connect(MONGO_URI, {
         useNewUriParser: true,
         useUnifiedTopolgy: true,
         /*useCreateIndex: true,
         useFindAndModify: false,*//*
        })
        .then(() => {
         console.log("Successfully connected to database");
        })
        .catch(() => {
         console.log("database connection failed, exiting now...");
         console.error(error);
         process.exit(1);
        });
};
*/