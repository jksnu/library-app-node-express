
var exports = module.exports = {};

exports.authenticateRoute = function(req, res, next){
    if(!req.user){
        res.redirect('/');
    } else{
        next();
    }    
}