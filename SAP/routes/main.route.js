const express = require('express');
const mainCtrl = require('../controllers/main.controller');

const router = express.Router();

// Render main page
router.get('/', mainCtrl.loadMain);

// Get the graph data
router.get('/favourites', mainCtrl.loadFavourites);

module.exports = router;
