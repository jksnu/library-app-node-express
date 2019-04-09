const db = require('./db');
const dbName = 'libraryApp';
const collectionName = 'users';

var exports = module.exports = {};

exports.authenticate = function(user){
    return new Promise((resolve, reject) => {
        try {
            /*req.login(req.body, () => {            
                resolve((req.user)? true: false);
            });*/
            db.getDB(dbName, collectionName).then((dbObj) => {
                dbObj.findOne({
                    '$and': [
                        {"userName": user.username},
                        {"password": user.password}
                    ]
                }, (err, result) => {
                    if(err){
                        reject(err);
                    }
                    resolve(result);
                });
            }, (err) => {
                reject(err);
            });
            
        } catch (error) {
            reject(error);
        }        
    });    
}

exports.addUser = function(user){
    return new Promise((resolve, reject) => {
        db.getDB(dbName, collectionName).then((dbObj) => {            
            dbObj.insertOne(user, (err, result) => {
                if(err){
                    reject(err);
                }
                resolve(result);
            })
        }, (err) => {
            reject(err);
        })
    });
}