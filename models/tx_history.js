const mongoose = require('mongoose');
const Schema = mongoose.Schema
const User = require("./user")

const txSchema = new Schema({
    txID: {
        type: mongoose.Schema.Types.ObjectId,
    },
    userName: {
        type: String,
        required:true,
        ref: User
    },
    name: {
        type: String,
        required:true,
    },
    purchase: {
        type: [String],
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('tx_history', txSchema);