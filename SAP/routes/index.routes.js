const express = require('express');
const router = express.Router();

//Set up variables to hold our routes
const userRoutes = require('./user.route');
const mainRoutes = require('./main.route');
const servicesRoutes = require('./services.route');
const loginRoutes = require('./login.route');
const categoryRoutes = require('./category.route');

//Mount all routes to /api
router.use('/user', userRoutes);
router.use('/main', mainRoutes);
router.use('/services', servicesRoutes);
router.use('/', loginRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
