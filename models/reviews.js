const mongoose = require('mongoose');
const Schema = mongoose.Schema
const User = require("./user")
const Game = require("./games")

const reviewSchema = new Schema({
    gameID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Game,
    },
    title: {
        type: String,
        required:true,
    },
    userName: {
        type: String,
        required: true,
        ref: User
    },
    
    review: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);