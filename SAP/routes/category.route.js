const express = require('express');
const categoryCtrl = require('../controllers/category.controller');

const router = express.Router();

// Render category page
router.get('/', categoryCtrl.loadCategory);

//this allows you to fetch data
router.get('/load/:name', function(req, res, next){
  categoryCtrl.findCategory(req, res, next);
});

module.exports = router;
