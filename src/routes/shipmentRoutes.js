// src/routes/shipmentRoutes.js
const express = require('express');
const router = express.Router();
const shipmentController = require('../controllers/shipmentController');

router.get('/', shipmentController.getShipments);
router.post('/', shipmentController.createShipment);
router.put('/:id', shipmentController.updateShipment);
// Define other routes for shipments as needed

module.exports = router;
