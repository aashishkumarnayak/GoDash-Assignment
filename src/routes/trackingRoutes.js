// src/routes/trackingRoutes.js
const express = require('express');
const router = express.Router();
const trackingController = require('../controllers/trackingController');

router.get('/', trackingController.getTrackings);
router.get('/:id', trackingController.getTrackingById);
// Define other routes for trackings as needed


// Route to update tracking information
router.put('/:id', trackingController.updateTrackingById);

module.exports = router;
