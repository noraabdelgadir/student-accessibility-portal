const express = require('express');
const categoryCtrl = require('../controllers/category.controller');

const router = express.Router();

// Render category page
router.get('/', categoryCtrl.loadCategory);

module.exports = router;
