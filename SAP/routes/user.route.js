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

// 
// router.post('/login' ,function(req, res){
//   var username = 'nicolalli'
//   var password = '1234'
//   // req.body.username, req.body.password
//   console.log(username);
//
//   User.find({utorid: username, password: password},function(err, users) {
//       if (err) throw err;
//       req.session.curUser = username;
//       console.log("HELLO");
//         console.log(req.session.curUser);
//       res.redirect("views/Login/index.html");
//
//   })
//
//   // res.redirect('/main');
//
//
//
// });




// router.get('/main' ,function(req, res, next){
//   if(!req.session.user){
//     return res.status(400).send();
//   }
//
//   return
//
//
//
//
// });


module.exports = router;
