// src/models/shipmentModel.js
const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    recipient: {
        type: String,
        required: true
    },
    packageDimensions: {
        // Define package dimensions schema here
    },
    weight: {
        type: Number,
        required: true
    },
    // Define other fields as needed
});

const Shipment = mongoose.model('shipments', shipmentSchema);

module.exports = Shipment;
