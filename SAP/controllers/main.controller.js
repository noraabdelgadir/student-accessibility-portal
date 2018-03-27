var Users = require('../models/User');
var Graphs = require('../models/Graph');

function loadMain (req, res, next){
  res.sendFile('/SAP/views/PersonalGraph/main.html', {'root': '../'})
}

function loadFavourites (req, res, next){
  Users.find({utorid: req.session.currentUser.utorid})
       .select({favourites: 1})
       .exec(function(err, favourites) {
          if (err) throw err;
          res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030/main');
          res.setHeader('Access-Control-Allow-Methods', 'GET');
          res.json(favourites);
       });
}

module.exports = {loadMain, loadFavourites};
