const express = require('express');

const {
    createMovie,
    getMovie,
    updateMovie,
    deleteMovie,
    getMovies} = require('../controllers');

    const router = express.Router();

    router.post('/create-movie', createMovie);
    router.get('/get-Movie', getMovie);
    router.delete('/delete-movie', deleteMovie);
    router.put('/update-movie', updateMovie);
    router.get('/get-movies', getMovies);

    module.exports = {
        router
    }