const express = require('express');
const router = express.Router();

//Set up variables to hold our routes
const userRoutes = require('./user.route');

//Mount all routes to /api
router.use('/user', userRoutes);

module.exports = router;
