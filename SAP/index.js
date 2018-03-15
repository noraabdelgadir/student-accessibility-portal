'use strict';

//setup all the variables needed
var express = require('express');
var path = require('path');
var app = express();

var server = require('http').Server(app);
var routes = require('./routes/index.routes');

//Set up default db connection and create error handlers

var mongoDB = "mongodb://sapuser1:sapuser1@ds115569.mlab.com:15569/sap";
mongoose.connect(mongoDB);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Database models
var Users = require('./models/User');

//serve as static files for now
app.use('/views',express.static(path.join(__dirname, '/views')));
app.use('/assets',express.static(path.join(__dirname, '/assets')));

//serve directory for assets
//app.use(express.static(__dirname + '/assets'));
//app.use(express.static(__dirname + '/'));

/*app.get('/', (req, res) => {
  res.send('NOTHING HERE YET')
});*/

// Definition of Routing of back-ends.
app.use('/api', routes);

var server = app.listen(3030, function() {
  console.log('Running on 127.0.0.1:%s', server.address().port);
});

// meta data
var datas = {"guest": {"password" : "guest", "firstname" : "guest", "lastname": "guest"}}
app.get('/all', sendAll);

app.get('/add/:user/:pw/:first/:last', addUser);

function sendAll(request, response) {
  response.send(datas);
}

function addUser(request, response){
  var username = request.params.user;
  var password = request.params.pw;
  var first = request.params.first;
  var last = request.params.last;

  var newInput = {"password": password, "firstname": first, "lastname": last}

  datas[username] = newInput

}


