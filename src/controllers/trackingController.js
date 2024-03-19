// trackingController.js

// Import the Tracking model (replace 'Tracking' with your actual model)
const Tracking = require('../models/trackingModel');

// Controller function to handle GET request for trackings
exports.getTrackings = async (req, res) => {
    try {
        // Fetch trackings from the database
        const trackings = await Tracking.find();
        res.json(trackings);
    } catch (error) {
        console.error('Error fetching trackings:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to handle GET request for a specific tracking by ID
exports.getTrackingById = async (req, res) => {
    try {
        // Fetch a specific tracking by ID from the database
        const tracking = await Tracking.findById(req.params.id);
        if (!tracking) {
            return res.status(404).json({ message: 'Tracking not found' });
        }
        res.json(tracking);
    } catch (error) {
        console.error('Error fetching tracking by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to handle PUT request to update tracking information
exports.updateTrackingById = async (req, res) => {
    try {
        // Extract updated tracking data from request body
        const { status, location, estimatedDeliveryTime } = req.body;

        // Find the tracking by ID and update it
        const updatedTracking = await Tracking.findByIdAndUpdate(
            req.params.id,
            { status, location, estimatedDeliveryTime },
            { new: true }
        );

        if (!updatedTracking) {
            return res.status(404).json({ message: 'Tracking not found' });
        }

        res.json(updatedTracking);
    } catch (error) {
        console.error('Error updating tracking by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Other controller methods as needed
