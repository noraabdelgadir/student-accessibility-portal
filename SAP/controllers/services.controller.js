var Users = require('../models/User');
var Graphs = require('../models/Graph');

function loadServices (req, res, next){
<<<<<<< HEAD
    res.sendFile('/SAP/views/AllServicesGraph/allServices.html', {'root': '../'})
=======
    res.sendFile('./SAP/views/AllServicesGraph/allServices.html', {'root': '../'})
>>>>>>> 5df8d59b9250cbc6ac030f9d582f957a2ebfe41d
}

module.exports = {loadServices};
