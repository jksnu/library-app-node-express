const authDao = require('../dao/authDao');

var exports = module.exports = {};

exports.authenticate = function(req, res, next){
    authDao.authenticate(req, res).then((result) => {
        res.isAuthenticate = result;
        next();
    }, (err) => {
        res.error = err;
        next();
    });
}

exports.getUserProfile = function(req, res, next){
    res.body = req.user;
    next();
}