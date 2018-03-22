var Users = require('../models/User');
var Graphs = require('../models/Graph');

function loadIndex (req, res, next){
  res.sendFile('/SAP/views/Login/index.html', {'root': '../'})
}

function loadCSS (req, res, next){
  res.sendFile('/SAP/views/Login/index.css', {'root': '../'})
}

function loadSignup(req, res, next){
  res.sendFile('/SAP/views/Login/signup.html', {'root': '../'})
}

function loadSignupCSS(req, res, next){
  res.sendFile('/SAP/views/Login/signup.css', {'root': '../'})
}

module.exports = {loadIndex, loadCSS, loadSignup, loadSignupCSS};
