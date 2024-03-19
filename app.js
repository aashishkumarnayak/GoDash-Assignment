// app.js (or index.js)
const express = require('express');
const app = express();
const quoteRoutes = require('./src/routes/quoteRoutes');
const shipmentRoutes = require('./src/routes/shipmentRoutes');
const trackingRoutes = require('./src/routes/trackingRoutes');
const errorHandler = require('./src/middlewares/errorHandler');
const database = require('./src/config/database');

// Middleware
app.use(express.json());

// Routes
app.use('/quotes', quoteRoutes);
app.use('/shipments', shipmentRoutes);
app.use('/trackings', trackingRoutes);
// Add other routes as needed

// Error handler middleware
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
