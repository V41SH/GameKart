const mongoose = require('mongoose');

const { Schema } = mongoose;

/*
    Defining the schema for the games collection
*/

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Game', gameSchema);