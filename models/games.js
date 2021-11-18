const mongoose = require('mongoose');

const Schema = mongoose.schema

const gameSchema = new Schema({
    gameID: {
        type: [mongoose.Schema.Types.ObjectId],
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
});

module.exports = mongoose.model('Game', gameSchema);