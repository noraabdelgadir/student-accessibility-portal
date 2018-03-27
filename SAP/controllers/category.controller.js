var Graph = require('../models/Graph');

function loadCategory (req, res, next){
    res.sendFile('/SAP/views/CategoryGraph/categories.html', {'root': '../'})
}

/** Find specific category **/
function findCategory(req, res, next){
  var realName = ''
  if (req.params.name == "documents"){
    realName = 'Documents';
  }
  else if (req.params.name == "counsellors"){
    realName = "Counsellors";
  }
  else if (req.params.name == "notes"){
    realName = "Note Taking";
  }
  else if (req.params.name == "test"){
    realName = "Test and Exam Accommodation";
  }
  else if (req.params.name == "build"){
    realName = "Building Accessibility";
  }

  console.log(realName)
    Graph.findOne({name: realName},function(err, services) {
          if (err) throw err;

          // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030/category');
          // res.setHeader('Access-Control-Allow-Methods', 'GET');
          // res.json(services);
          res.send(services);
    });
}

module.exports = {loadCategory, findCategory};

