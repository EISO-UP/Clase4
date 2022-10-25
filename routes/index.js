const express = require('express');

const {
    getData,
    updateData} = require('../controllers');

    const router = express.Router();

    router.get('/get-user-data/:id', getData);
    router.put('/update-user-address/:id', updateData);

    module.exports = {
        router
    }