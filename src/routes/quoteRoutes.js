const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

// Route to get all quotes
router.get('/', quoteController.getQuote);

// Route to add a new quote
router.post('/', quoteController.addQuote);

module.exports = router;
