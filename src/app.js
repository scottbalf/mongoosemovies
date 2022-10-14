require("./db/connection");
const mongoose = require('mongoose')
const yargs = require("yargs");
const { createMovie } = require("./movie/movieFunctions");
const { readMovies } = require("./movie/movieFunctions");
const { updateMovie } = require("./movie/movieFunctions")
const { deleteMovie } = require("./movie/movieFunctions")

const app = async (yargsObject) => {
    // const collection = await connection()
    try {
        if (yargsObject.create) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor, more:yargsObject.more})
            console.log(await readMovies())
        } else if (yargsObject.read) {
            console.log(await readMovies(yargsObject.key, yargsObject.filter))
        } else if (yargsObject.update) {
            await updateMovie(
                {[yargsObject.filterKey]: yargsObject.filterValue},
                {[yargsObject.updateKey]: yargsObject.updateValue},
            )
            // console.log(await updateMovie.read(collection))
            console.log(await readMovies())
        } else if (yargsObject.delete){
            await deleteMovie({[yargsObject.deleteKey]: yargsObject.deleteValue},)
            console.log(await readMovies())
        } else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect()
        } catch (error) {
            await mongoose.disconnect()
            console.log(error)

    }

}

app(yargs.argv)