var Users = require('../models/User');
var Graphs = require('../models/Graph');

function loadServices (req, res, next){
    res.sendFile('./SAP/views/AllServicesGraph/allServices.html', {'root': '../'})
}

module.exports = {loadServices};
