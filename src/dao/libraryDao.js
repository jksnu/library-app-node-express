const db = require('./db');
const {ObjectId} = require('mongodb');
const dbName = 'libraryApp';
const collectionName = 'books';

var exports = module.exports = {};

exports.insertBooks = function(books) {
    return new Promise((resolve, reject) => {
        db.getDB(dbName, collectionName).then((dbObj) => {
            dbObj.insertMany(books).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            });
        }, (err) => {
            reject(err);
        });
    });    
}

exports.getBooks = function() {
    return new Promise((resolve, reject) => {
        db.getDB(dbName, collectionName).then((dbObj) => {
            dbObj.find({}).toArray((err, data) => {
                if(err) {
                    reject(err);
                }
                resolve(data);
            });
        }, (err) => {
            reject(err);
        })
    });
}

exports.getBook = function(req, res) {
    return new Promise((resolve, reject) => {
        if(!req.params.id){
            reject(new Error("book id not available"));
        }
        db.getDB(dbName, collectionName).then((dbObj) => {
            dbObj.findOne({'_id': ObjectId(req.params.id)}, (err, data) => {
                if(err) {
                    reject(err);
                }
                resolve(data);
            })
        }, (err) => {
            reject(err);
        })
    });
}