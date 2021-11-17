const mongoose = require('mongoose');

const { Schema } = mongoose;

/*
    Defining the schema for the reviews collection
*/

const reviewSchema = new Schema({
    userID: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'User',
    },
    gameID: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: 'Game',
    },
    review: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);