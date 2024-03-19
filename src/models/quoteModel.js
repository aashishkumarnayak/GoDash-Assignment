// src/models/quoteModel.js
const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    packageType: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
});

const Quote = mongoose.model('quotes', quoteSchema);

module.exports = Quote;
