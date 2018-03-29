var Graph = require('../models/Graph');
var User = require('../models/User');

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

function addFavourite(req, res, next){
  // var cat = req.params.category
  console.log("here")
  console.log(req.body.newcat)
  console.log(req.body.subcat)
  var flag = false
  var username = req.session.currentUser.utorid
  var oldFav = req.session.currentUser.favourites

  var favObject = oldFav.nodes[0]
  var nodesLen =  Object.keys(favObject).length

  console.log(nodesLen)
  console.log(username)

  var catName = ""
  var link = ""
  if (req.body.newcat == "documents"){
    catName = "Documents"
    link = "http://localhost:3030/category?category=documents"
  }
  if (req.body.newcat == "test"){
    catName = "Test and Exam Accommodation"
    link = "http://localhost:3030/category?category=test"
  }
  if (req.body.newcat == "counsellors"){
    catName = "Counsellors"
    link = "http://localhost:3030/category?category=counsellors"
  }
  if (req.body.newcat == "notes"){
    catName = "Note Taking"
    link = "http://localhost:3030/category?category=notes"
  }
  if (req.body.newcat == "build"){
    catName = "Building Accessibility"
    link = "http://localhost:3030/category?category=build"
  }

  for (var key in favObject){
    if (favObject[key].label == catName){
      // res.status(404).send("already exists")
      // return;
      flag = true;
    }
    if (key == req.body.subcat){
      res.status(404).send("sub-category already exists")
      return;
    }
  }

  // only add the category if doesn't exist
  if (flag == false){
    var newFav = oldFav
    var favName = req.body.newcat
    var favNode = {"color": "#008BB0", "shape": "dot", "label": catName, "link": link}
    // var favNode = {}

    newFav.nodes[0][favName] = favNode
    newFav.edges[0]["center"][favName] = {"length": "0.4"}
    newFav.edges[0][favName] = {}
  }

  // add syb category here
  var subCatNode = {}

  Graph.findOne({name: catName},function(err, result) {
        if (err) throw err;
        var subb = req.body.subcat

        subCatNode = result.nodes.subb
  });

  subCatNode.shape = "rectangle"
  subCatNode.parent = req.body.newcat

  newFav.nodes[0][req.body.subcat] = subCatNode
  newFav.edges[0][favName][req.body.subcat] = {"length": "0.4"}




  // console.log("oldfav: ")
  // console.log(oldFav)
  console.log("newfav: ")
  console.log(newFav)

  User.updateOne( {utorid:username}, { $set: { favourites: newFav } }, function(err) {

    if (!err){
      console.log("fav works")
      res.status(200).send("yay")
    }
    else {
      res.status(400).send("ERRROOr")
    }

  });

}

function deleteFavourite(req, res, next){
  // var cat = req.params.category
  //console.log("here")
  //console.log(req.body.newcat)
  var flag = true
  var username = req.session.currentUser.utorid
  var oldFav = req.session.currentUser.favourites;
  var oldNodes = oldFav.nodes[0]
  var oldEdges = req.session.currentUser.favourites.edges[0].center
  var nodesLen =  Object.keys(oldNodes).length

  /*console.log(nodesLen)
  console.log(username)
  console.log(oldEdges)
  console.log(oldNodes)*/

  var catName = ""
  if (req.body.newcat == "documents"){
    catName = "Documents"
  }
  if (req.body.newcat == "test"){
    catName = "Test and Exam Accommodation"
  }
  if (req.body.newcat == "counsellors"){
    catName = "Counsellors"
  }
  if (req.body.newcat == "notes"){
    catName = "Note Taking"
  }
  if (req.body.newcat == "build"){
    catName = "Building Accessibility"
  }

  var edgeToRemove = ""

  //console.log("list")

  for (var key in oldNodes) {
    // console.log("key")
    // console.log(key)
    // console.log(favObject[key])
    if (oldNodes[key].label == catName){
      edgeToRemove = key
      delete oldNodes[key]
    }
  }

  if (edgeToRemove == ""){
    res.status(404).send("Data doesn't exist")
    return;
  }

  for (var key in oldEdges) {
    // console.log("key")
    // console.log(key)
    // console.log(favObject[key])
    if (key == edgeToRemove){
      delete oldEdges[key]
    }
  }

  /*console.log("after")
  console.log(oldNodes)
  console.log(oldEdges)*/

  var newFav = {edges: [ { "center": oldEdges} ], nodes: [oldNodes]}

  User.updateOne( {utorid:username}, { $set: { favourites: newFav } }, function(err) {

    if (!err){
      console.log("unfav works")
      res.status(200).send("yay")
    }
    else {
      res.status(400).send("ERRROOr")
    }

  });

}

module.exports = {loadCategory, findCategory, addFavourite, deleteFavourite};
