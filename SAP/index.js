'use strict';

//setup all the variables needed
var express = require('express');
var path = require('path');
var app = express();

var server = require('http').Server(app);

//serve as static files for now
app.use('/views',express.static(path.join(__dirname, '/views')));
app.use('/assets',express.static(path.join(__dirname, '/assets')));

//serve directory for assets
//app.use(express.static(__dirname + '/assets'));
//app.use(express.static(__dirname + '/'));

/*app.get('/', (req, res) => {
  res.send('NOTHING HERE YET')
});*/

var server = app.listen(3030, function() {
  console.log('Running on 127.0.0.1:%s', server.address().port);
});
