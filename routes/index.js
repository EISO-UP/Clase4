const express = require('express');

const {
    getData,
    updateData,
    createUser,
    deleteUser} = require('../controllers');

    const router = express.Router();

    router.get('/get-user-data/:id', getData);
    router.put('/update-user-address/:id', updateData);
    router.post('/create-user', createUser);
    router.delete('/delete-user/:id', deleteUser);

    module.exports = {
        router
    }