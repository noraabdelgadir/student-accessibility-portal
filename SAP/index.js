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
var User = require('./models/User');
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

// login and register underneath

var currentUser = "none";
app.get('/curUser', sendCur);


function sendCur(request, response) {
  // rawFile.open("GET", 'http://localhost:3030/user', false);
  response.send(currentUser);
}

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/login' ,function(req, res){
  var username = req.body.username
  var password = req.body.password

  // var ha = req.body.username
  // console.log(username);

  User.findOne({utorid: username, password: password},function(err, users) {
      if (err){
        res.status(400).send("oh no")
      }
      req.session.currentUser = users;
      currentUser = username;
      // console.log("HELLO");
        console.log(username);
        console.log(password);
      if (users) {
        // res.redirect("/main");
        res.status(200).send("yay")

      }
      else {
        res.status(404).send("user not found")
      }

  })
});

app.post('/register' ,function(req, res){
  var username = req.body.utorid
  var firstname = req.body.firstname
  var lastname  = req.body.lastname
  var password = req.body.password
  // var ha = req.body.username
  // console.log(username);

  var id = new mongoose.mongo.ObjectId();


  var newUser = new User({
  _id: id,
  utorid: username,
  first_name: firstname,
  last_name: lastname,
  email: 'sample@mail.utoronto.ca',
  password: password,
  favourites: {
      nodes: [
            {
                "center": {
                    "label": firstname + " " + lastname,
                    "shape": "dot",
                    "color": "#00215C",
                    "mass": "1"
                }
            }
        ],
      edges: [
        ]
  },
  admin: false
  });

  console.log(newUser);
  console.log("check ");
  User.create(newUser,function(err, users) {
      if (err){
        res.status(400).send("error")
      }

      if (users) {
        // res.redirect("/main");
        console.log(users)
        res.status(200).send("yay")
      }

      else {
        res.status(400).send("error")
      }

  })

});
