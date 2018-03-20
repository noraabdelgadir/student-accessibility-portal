const express = require('express');
const mainCtrl = require('../controllers/main.controller');

const router = express.Router();

// Render main page
//router.get('/', main.loadHome);

router.get('/', function(req, res, next){
    mainCtrl.listServices(req, res);
});

module.exports = router;
