const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
var User = require('../models/User');

router.get('/', function(req, res, next){
  userCtrl.listUsers(req, res);
});

router.get('/:utorid', function(req, res, next){
  userCtrl.findbyUtor(req, res);
});

router.get('/:utorid/:password', function(req, res, next){
  User.find({utorid: req.params.utorid, password: req.params.password},function(err, users) {
      if (err) throw err;
        res.send(users);
  });
});

router.delete('/:user_id', function(req, res, next){
  userCtrl.deleteUser(req, res);
});

module.exports = router;
