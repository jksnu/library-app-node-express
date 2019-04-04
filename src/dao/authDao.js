//const db = require('./db');
//const dbName = 'libraryApp';
//const collectionName = 'books';

var exports = module.exports = {};

exports.authenticate = function(req, res){
    return new Promise((resolve, reject) => {
        try {
            req.login(req.body, () => {            
                resolve((req.user)? true: false);
            });
        } catch (error) {
            reject(error);
        }        
    });    
}