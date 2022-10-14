const mongoose = require('mongoose')
//Everything in Mongoose starts with a Schema.
//organisation or structure for a collection inside a database
//Essentially, it is a library that allows you to pass documents to a DMBS.
//Mongoose is an Object Document Mapping defining the structure of your documents and the types of data you're storing.

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not Specified",
    },
    more: {
        type: String,
        default: "Not Specified",
    }
});

const Movie = mongoose.model("Movie2", movieSchema)
module.exports = Movie
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.