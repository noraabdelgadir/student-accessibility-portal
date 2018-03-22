var Users = require('../models/User');
var Graphs = require('../models/Graph');

function loadMain (req, res, next){
  Graphs.find({utorid: req.params.user, {favourites: 1}}, function(err, favourites) {
      if (err) throw err;
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030/main')
      res.setHeader('Access-Control-Allow-Methods', 'GET')
      res.send(JSON.stringify(favourites))
  });
  //res.sendFile('/SAP/views/PersonalGraph/main.html', {'root': '../'})
}

module.exports = {loadMain};
