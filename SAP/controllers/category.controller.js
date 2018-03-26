var Graph = require('../models/Graph');

function loadCategory (req, res, next){
    res.sendFile('/SAP/views/CategoryGraph/categories.html', {'root': '../'})
}

/** Find specific category **/
function findCategory(req, res, next){
    Graph.find({name: req.params.name},function(err, services) {
          if (err) throw err;
          res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030/category');
          res.setHeader('Access-Control-Allow-Methods', 'GET');
          res.json(services);
    });
}

module.exports = {loadCategory, findCategory};
