// Adding Mongoose as a variable
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const movieSchema = new Schema({
    title: String,
    genre: String
}, {
    versionKey: false 
});

// const env = "test";
// const env = "";
// console.log(env);
// if(env == 'test'){
//     console.log("Test environment");
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/testEnv'
//   } else {
//     console.log("Developer environment");
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/cinema'
//   };

// connect to MongoDB with - mongoose.connect(uri, options)
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, 
mongoose.connect('mongodb://localhost:27017/filmTest', { useNewUrlParser: true }, 
function (error) {
    if (error) {
        console.log("ERROR!!!!");
    } else {
        console.log("No Error");
    }
});


const Movie = model('Movie', movieSchema);

// Exporting the Movie object out of the module
module.exports = {
    "Movie": Movie,
};