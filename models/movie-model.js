const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
    name: {type :String, require: true},
    time: {time :[String], require: true},
    name: {rating :Number, require: true}
    },
    {timestamps: true}
);

module.exports = mongoose.model('movies', Movie);