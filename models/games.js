const mongoose = require('mongoose');

const Schema = mongoose.Schema

const gameSchema = new Schema({
    gameID: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image_path: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Game', gameSchema);