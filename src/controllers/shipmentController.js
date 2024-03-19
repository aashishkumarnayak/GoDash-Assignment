// shipmentController.js

// Import the Shipment model (replace 'Shipment' with your actual model)
const Shipment = require('../models/shipmentModel');

const Tracking = require('../models/trackingModel');
// Controller function to handle GET request for shipments
exports.getShipments = async (req, res) => {
    try {
        // Example: Fetch shipments from the database
        const shipments = await Shipment.find();
        res.json(shipments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to handle POST request for creating a shipment
exports.createShipment = async (req, res) => {
    try {
        // Extract shipment data from request body
        const { sender, recipient, origin, destination, weight, packageType } = req.body;

        // Create a new shipment instance
        const newShipment = new Shipment({
            sender,
            recipient,
            origin,
            destination,
            weight,
            packageType
        });

        // Save the new shipment to the database
        const savedShipment = await newShipment.save();

        // Create tracking information for the new shipment
        const newTracking = new Tracking({
            shipmentId: savedShipment._id,
            status: 'Pending', // Set initial status
            location: origin, // Initial location is the origin
            estimatedDeliveryTime: null // Estimated delivery time is initially unknown
        });

        // Save the new tracking information to the database
        await newTracking.save();

        res.status(201).json(savedShipment);
    } catch (error) {
        console.error('Error creating shipment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to handle PUT request for updating a shipment
exports.updateShipment = async (req, res) => {
    try {
        // Example: Update an existing shipment based on request body
        const updatedShipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedShipment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Other controller methods as needed
