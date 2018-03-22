var User = require('../models/User');

/** Get list of all users **/
function listUsers (req, res){
    User.find({}, function(err, users) {
        if (err) throw err;
        res.send(JSON.stringify(users));
    });
}

/** Find user by utorid **/
function findbyUtor(req, res){
    console.log(req.params.utorid);
    User.find({utorid: req.params.utorid},function(err, users) {
        if (err) throw err;
          res.send(users);
    });
}

function hello(req, res){
    console.log(req.params.utorid);
    User.find({utorid: req.params.utorid, password: req.params.password},function(err, users) {
        if (err) throw err;
          res.send(users);
    });
}

/** Add new User **/
function addUser (req, res, next){
    var user = new User();
    user.utorid = req.body.utorid;
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;
    user.password = req.body.password;

    //SAVE SESSION
    user.save(function(err, newUser) {
        if (err) throw err;

        req.session.name = req.body.first_name;
        req.session.email = req.body.email;

        return next();
    });
}

module.exports = {listUsers, findbyUtor, addUser};
