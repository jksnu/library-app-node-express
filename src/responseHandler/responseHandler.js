var exports = module.exports = {};

exports.send = function(req, res, next){
    res.send(res.body);
    next();
}

exports.booksRender = function(req, res, next){ 
    let nav = res.locals.nav; 
    let books = res.body.data;
    res.render(
        'books',
        {
            nav,
            "title": "Library",
            books
        }
    );
    next();
}

exports.bookRender = function(req, res, next){ 
    let nav = res.locals.nav; 
    let book = res.body.data;
    res.render(
        'singleBook',
        {
            nav,
            "title": book.title,
            book
        }
    );
    next();
}

exports.authRoute = function(req, res, next){
    if(res.isAuthenticate === true){
        res.redirect('/auth/profile');
    } else {
        res.redirect('/home');
    }
    next();
}