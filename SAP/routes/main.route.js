const express = require('express');
const mainCtrl = require('../controllers/main.controller');

const router = express.Router();

// Render main page
router.get('/', mainCtrl.loadMain);

router.get('/', function(req, res, next){
    mainCtrl.listServices(req, res);
});

module.exports = router;
