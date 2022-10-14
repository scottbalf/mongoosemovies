const Movie = require("./movieModel")

exports.createMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject)
    } catch (error) {
        console.log(error)
    }
}

exports.readMovies = async (key, filter) => {
    try {
        if (key) {
            return await Movie.findOne({[key]: filter})
        } else {
            return await Movie.find({})
        }
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (filterObject, updateObject) => {
    try {
        await Movie.updateOne(filterObject, {$set: updateObject})
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObject) => {
    try {
        await Movie.deleteOne(movieObject)
    } catch (error) {
        console.log(error)
    }
}