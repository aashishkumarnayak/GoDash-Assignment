// src/models/trackingModel.js
const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
    shipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'In Transit', 'Delivered'],
        default: 'Pending'
    },
    location: {
        type: String
    },
    estimatedDeliveryTime: {
        type: Date
    },
    // Define other fields as needed
});

const Tracking = mongoose.model('trackings', trackingSchema);

module.exports = Tracking;
