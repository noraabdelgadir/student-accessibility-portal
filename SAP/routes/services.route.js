const express = require('express');
const servicesCtrl = require('../controllers/services.controller');

const router = express.Router();

// Render main page
router.get('/', servicesCtrl.loadServices);


module.exports = router;
