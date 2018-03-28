const express = require('express');
const mainCtrl = require('../controllers/login.controller');

const router = express.Router();

// Render main page
router.get('/', mainCtrl.loadIndex);

router.get('/index.css', mainCtrl.loadCSS);

router.get('/signup.css', mainCtrl.loadSignupCSS);

router.get('/signup.html', mainCtrl.loadSignup);

module.exports = router;
