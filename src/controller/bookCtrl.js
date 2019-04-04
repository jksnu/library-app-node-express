const libraryDao = require('../dao/libraryDao')

exports = module.exports = {};

exports.getBooks = function(req, res, next) {
    libraryDao.getBooks().then((result) => {
        res.body.data = result;
        next();
    }, (err) => {
        res.error = err;
        next();
    });
}

exports.getBook = function(req, res, next) {
    libraryDao.getBook(req, res).then((result) => {
        res.body.data = result;
        next();
    }, (err) => {
        res.error = err;
        next();
    });
}