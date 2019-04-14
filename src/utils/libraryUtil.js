
var exports = module.exports = {};

exports.authenticateRoute = function(req, res, next){
    if(!req.user){
        res.redirect('/');
    } else{
        next();
    }    
}

exports.addResponseBody = function(req, res, next) {
    if(res.body === undefined || res.body === null){
        res.body = {};
    }
    next();
}