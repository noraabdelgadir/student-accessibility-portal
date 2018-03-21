const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

router.get('/', function(req, res, next){
  userCtrl.listUsers(req, res);
});

router.get('/:utorid', function(req, res, next){
  userCtrl.findbyUtor(req, res);
});

router.delete('/:user_id', function(req, res, next){
  userCtrl.deleteUser(req, res);
});

module.exports = router;
