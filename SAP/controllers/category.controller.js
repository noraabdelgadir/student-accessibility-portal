var Graph = require('../models/Graph');

function loadCategory (req, res, next){

    res.sendFile('/SAP/views/CategoryGraph/categories.html', {'root': '../'})
}

/** Find specific category **/
function findCategory(req, res){
    Graph.find({name: req.params.name},function(err, services) {
        if (err) throw err;
          res.send(services);
    });
}

module.exports = {loadCategory, findCategory};
