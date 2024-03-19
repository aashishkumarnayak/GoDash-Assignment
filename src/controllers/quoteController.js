// quoteController.js

// Example of importing a model (replace 'Quote' with your actual model)
const Quote = require('../models/quoteModel');

// Controller function to handle GET request for quotes
exports.getQuote = async (req, res) => {
    try {
        // Example: Fetch quotes from the database
        const quotes = await Quote.find();
        res.json(quotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.addQuote = async (req, res) => {
    try {
        // Extract quote data from request body
        const { origin, destination, weight, packageType, rate } = req.body;

        // Create a new quote instance
        const newQuote = new Quote({
            origin,
            destination,
            weight,
            packageType,
            rate
        });

        // Save the new quote to the database
        const savedQuote = await newQuote.save();

        res.status(201).json(savedQuote);
    } catch (error) {
        console.error('Error adding quote:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Other controller methods as needed
