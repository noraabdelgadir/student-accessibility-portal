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
console.log(oldFav.nodes)
  var favObject = oldFav.nodes[0]
  var nodesLen =  Object.keys(favObject).length

  console.log(nodesLen)
  console.log(username)

  var catName = ""
  var subName = ""
  var link = ""
  if (req.body.newcat == "documents"){
    catName = "Documents"
    link = "http://localhost:3030/category?category=documents"
    if (req.body.subcat == "verify"){
      subName = "Verification of Illness"
    }
    if (req.body.subcat == "renewal"){
      subName = "Accommodation Renewal"
    }
    if (req.body.subcat == "letter"){
      subName = "Letter of Accommodation"
    }
  }
  if (req.body.newcat == "test"){
    catName = "Test and Exam Accommodation"
    link = "http://localhost:3030/category?category=test"
    if (req.body.subcat == "request"){
      subName = "Request"
    }
    if (req.body.subcat == "late"){
      subName = "Late Request"
    }
    if (req.body.subcat == "info"){
      subName = "Information"
    }
  }
  if (req.body.newcat == "counsellors"){
    catName = "Counsellors"
    link = "http://localhost:3030/category?category=counsellors"
    if (req.body.subcat == "adaptive"){
      subName = "Adaptive Technologist"
    }
    if (req.body.subcat == "learning"){
      subName =  "Learning Strategist"
    }
    if (req.body.subcat == "advisor"){
      subName = "Accessibility Advisor"
    }
  }
  if (req.body.newcat == "notes"){
    catName = "Note Taking"
    link = "http://localhost:3030/category?category=notes"
    if (req.body.subcat == "upload"){
      subName = "Upload Notes"
    }
    if (req.body.subcat == "volunteer"){
      subName =  "Volunteer"
    }
    if (req.body.subcat == "request"){
      subName = "Request Note Taking"
    }
  }
  if (req.body.newcat == "build"){
    catName = "Building Accessibility"
    link = "http://localhost:3030/category?category=build"
    if (req.body.subcat == "washrooms"){
      subName = "Gender Neutral Washrooms"
    }
    if (req.body.subcat == "wheelchair"){
      subName =  "Wheelchair Entrance Map"
    }
    if (req.body.subcat == "elevator"){
      subName = "Elevator Map"
    }
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
  var subCatNode = {"mass": "1",
            "color": "#008BB0",
            "shape": "rectangle",
            "label": subName,
            "link": "",
            "parent": req.body.newcat}


  newFav.nodes[0][req.body.subcat] = subCatNode
  newFav.edges[0][favName][req.body.subcat] = {"length": "0.4"}



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
  var oldEdges = req.session.currentUser.favourites.edges[0]
  var catt = req.body.newcat
  var oldEdgesCat = req.session.currentUser.favourites.edges[0].catt
  console
  var nodesLen =  Object.keys(oldNodes).length

  var catName = ""
  var subName = ""
  if (req.body.newcat == "documents"){
    catName = "Documents"
    if (req.body.subcat == "verify"){
      subName = "Verification of Illness"
    }
    if (req.body.subcat == "renewal"){
      subName = "Accommodation Renewal"
    }
    if (req.body.subcat == "verify"){
      subName = "Letter of Accommodation"
    }
  }
  if (req.body.newcat == "test"){
    catName = "Test and Exam Accommodation"
    if (req.body.subcat == "request"){
      subName = "Request"
    }
    if (req.body.subcat == "late"){
      subName = "Late Request"
    }
    if (req.body.subcat == "info"){
      subName = "Information"
    }
  }
  if (req.body.newcat == "counsellors"){
    catName = "Counsellors"
    if (req.body.subcat == "adaptive"){
      subName = "Adaptive Technologist"
    }
    if (req.body.subcat == "learning"){
      subName =  "Learning Strategist"
    }
    if (req.body.subcat == "advisor"){
      subName = "Accessibility Advisor"
    }
  }
  if (req.body.newcat == "notes"){
    catName = "Note Taking"
    if (req.body.subcat == "upload"){
      subName = "Upload Notes"
    }
    if (req.body.subcat == "volunteer"){
      subName =  "Volunteer"
    }
    if (req.body.subcat == "request"){
      subName = "Request Note Taking"
    }
  }
  if (req.body.newcat == "build"){
    catName = "Building Accessibility"
    if (req.body.subcat == "washrooms"){
      subName = "Gender Neutral Washrooms"
    }
    if (req.body.subcat == "wheelchair"){
      subName =  "Wheelchair Entrance Map"
    }
    if (req.body.subcat == "elevator"){
      subName = "Elevator Map"
    }
  }
  var edgeToRemove = ""

  //console.log("list")

  for (var key in oldNodes) {

    // if (oldNodes[key].label == catName){
    //   edgeToRemove = key
    //   delete oldNodes[key]
    // }

    // console.log(key)
    if (key == req.body.subcat){
      edgeToRemove = key
      delete oldNodes[key]
    }
  }

  if (edgeToRemove == ""){
    res.status(404).send("Data doesn't exist")
    return;
  }

  console.log("check")

  for (var key in oldEdges) {
    console.log(key)
    console.log(oldEdges)
    if(key == req.body.newcat){
      console.log("BOOOOOOB")
        console.log(edgeToRemove)
      for (var key2 in oldEdges[key]){
        console.log(key2)


        // console.log(oldEdges)
        if (key2 == edgeToRemove){
          delete oldEdges[key][key2]
        }
        console.log(oldEdges)
      }
    }
    // if (key == edgeToRemove){
    //   delete oldEdgesCat[key]
    // }
  }

  // check if old Edges if empty
  for (var key in oldEdges){
    console.log("ANOTHER BOOOOOOOOB")
    console.log(key)
    console.log(oldEdges[key])
    console.log(Object.keys(oldEdges[key]).length)
    if (Object.keys(oldEdges[key]).length == 0){
      delete oldEdges[key]
      delete oldEdges["center"][key]
    }

  }

  /*console.log("after")
  console.log(oldNodes)
  console.log(oldEdges)*/
  var edgeToList = [oldEdges]

  var newFav = {edges: edgeToList, nodes: [oldNodes]}

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
