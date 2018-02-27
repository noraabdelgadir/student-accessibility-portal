'use strict';

//setup all the variables needed
var express = require('express');
var app = express();

var server = require('http').Server(app);

app.get('/', (req, res) => {
  res.send('NOTHING HERE YET')
});

var server = app.listen(3000, function() {
  console.log('Running on 127.0.0.1:%s', server.address().port);
});
