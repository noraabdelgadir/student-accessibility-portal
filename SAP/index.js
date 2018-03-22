'use strict';

//setup all the variables needed
var User = require('./models/User');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser')
var app = express();

var server = require('http').Server(app);
var routes = require('./routes/index.routes');

//Set up default db connection and create error handlers
var mongoDB = "mongodb://sapuser1:sapuser1@ds115569.mlab.com:15569/sap";
mongoose.connect(mongoDB);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Database models
var Users = require('./models/User');
var Graphs = require('./models/Graph');

//serve as static files for now
app.use('/views',express.static(path.join(__dirname, '/views')));
app.use('/assets',express.static(path.join(__dirname, '/assets')));

app.use(session({secret:"HEEEY",resave:false, saveUninitialized:false}))

//serve directory for assets
//app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));

/*app.get('/', (req, res) => {
  res.send('NOTHING HERE YET')
});*/

// Definition of Routing of back-ends.
app.use('', routes);

var server = app.listen(3030, function() {
  console.log('Running on 127.0.0.1:%s', server.address().port);
});

// meta data
// var datas = {"guest": {"password" : "guest", "firstname" : "guest", "lastname": "guest"}}
// sign up
//
// app.post('/login' ,function(req, res){
//   var username = req.params.username;
//   var password = req.params.password;
//   console.log(username);
//
//   User.find({utorid: username, password: password},function(err, users) {
//       if (err) throw err;
//       req.session.user = users;
//       console.log("HELLO");
//
//   })
//   console.log("aw");
//   // res.redirect('/main');
//
//
//
// });


//app.get('/curUser', currentUser);

//app.get('/curUser/:user', newUser);

//Login

var currentUser = "none";
app.get('/curUser', sendCur);


function sendCur(request, response) {
  // rawFile.open("GET", 'http://localhost:3030/user', false);
  response.send(currentUser);
}

app.use(express.json());
app.use(express.urlencoded());

app.post('/login' ,function(req, res){
  var username = req.body.username
  var password = req.body.password
  // var ha = req.body.username
  // console.log(username);

  User.findOne({utorid: username, password: password},function(err, users) {
      if (err){
        console.log("oh no");
      }
      req.session.currentUser = username;
      currentUser = username;
      // console.log("HELLO");
        console.log(username);
        console.log(password);
      if (users) {
        // res.redirect("/main");
        res.redirect("/views/PersonalGraph/main.html");
      }

  })
});
