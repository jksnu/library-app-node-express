const authDao = require('../dao/authDao');
const passport = require('passport');
var exports = module.exports = {};

exports.getUserProfile = function(req, res, next){
    res.body = req.user;
    next();
}

exports.addUser = function(req, res, next){
    if(req.body){
        var user = {};
        user.name = req.body.name;
        user.userName = req.body.userName;
        user.password = req.body.password;

        authDao.addUser(user).then((result) => {
            res.body.result = result;
            next();
        }, (err) => {
            res.error = err;
            next();
        });
    } else {
        res.error = new Error("request is not having user information");
        next();
    }
    
}