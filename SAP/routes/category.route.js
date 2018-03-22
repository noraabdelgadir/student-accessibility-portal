const express = require('express');
const categoryCtrl = require('../controllers/category.controller');

const router = express.Router();

// Render category page
router.get('/', categoryCtrl.loadCategory);

router.get('/:name', function(req, res, next){
  categoryCtrl.findCategory(req, res);
});

module.exports = router;
