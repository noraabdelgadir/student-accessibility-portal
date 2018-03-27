const express = require('express');
const bodyParser = require('body-parser');
const categoryCtrl = require('../controllers/category.controller');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }))

// Render category page
router.get('/', categoryCtrl.loadCategory);

//this allows you to fetch data
router.get('/load/:name', function(req, res, next){
  categoryCtrl.findCategory(req, res, next);
});

router.post('/favourite', function(req, res, next){
  categoryCtrl.addFavourite(req, res, next);
});

router.post('/unfavourite', function(req, res, next){
  categoryCtrl.deleteFavourite(req, res, next);
});

module.exports = router;
