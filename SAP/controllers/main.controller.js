var Users = require('../models/User');
var Graphs = require('../models/Graphs');

/*
/** Get the list of events 
function loadMain (req, res, next){
    console.log(req.session);

    Graphs.find({}, function(err, categories) {
        if (err) throw err;
        if (categories.length > 0){
            res.render('PersonalGraph/main', {categories: categories, name: req.session.name});
        } else{
            res.render('PersonalGraph/main', {categories: '', name: req.session.name})
        }
    });
}*/

function listServices(req, res){
    Graphs.find({}, function(err, services) {
        if (err) throw err;
        res.send(JSON.stringify(services));
    });
}
