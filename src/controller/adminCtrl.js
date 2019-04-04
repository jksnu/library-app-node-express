const libraryDao = require('../dao/libraryDao');

var exports = module.exports = {};

const books = [
    {
        'title': 'Ramayana',
        'genre': 'Hindu',
        'author': 'Balmiki',
        'read': false
    }, {
        'title': 'Mahabharat',
        'genre': 'Hindu',
        'author': 'Vedvyas',
        'read': false
    }, {
        'title': 'Gita',
        'genre': 'Hindu',
        'author': 'Krishna',
        'read': false
    }, {
        'title': 'Let us C',
        'genre': 'Technology',
        'author': 'Yashwant Kanetkar',
        'read': false
    }
];

exports.insertBooks = function(req, res, next){
    libraryDao.insertBooks(books).then((result) => {
        res.body = result;
        next();
    }, (err) => {
        res.error = err;
        next();
    });    
}