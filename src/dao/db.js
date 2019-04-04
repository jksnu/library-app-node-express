const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

var exports = module.exports = {};
var mongoClient;

getDBClient = function() {
    return new Promise((resolve, reject) => {
        if(mongoClient !== undefined && mongoClient !== null){
            resolve(true);
        } else {
            MongoClient.connect(url, { useNewUrlParser: true, poolSize: 10 },  (err, client) => {
                if(err) {
                    reject(err);
                } else {
                    mongoClient = client;
                }    
                resolve(true);
            });
        }        
    });
}

getDBCollection = function (dbName, collectionName) {
    let dbCollection = null;
    if(mongoClient !== null && mongoClient !== undefined) {
        dbCollection = mongoClient.db(dbName).collection(collectionName);
    }
    return dbCollection;
}

exports.getDB = function(dbName, collectionName){
    return new Promise((resolve, reject) => {
        getDBClient().then((isMongoClientCreated) => {
            if(isMongoClientCreated !== null && isMongoClientCreated !== undefined && isMongoClientCreated === true){
                let db = getDBCollection(dbName, collectionName);
                if(db !== undefined && db !== null){
                    resolve(db);
                } else {
                    reject(new Error('Failed to initialize DB for dbName = '+dbName+' and Collection name = '+collectionName));
                }
            }
        }), (err) => {
            reject(err);
        }
    });    
}

exports.closeConnection = function () {
    if(mongoClient !== null && mongoClient !== undefined) {
        mongoClient.close();
    }
}



