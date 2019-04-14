var exports = module.exports = {};

const nav = [
    {"link": "/books", "title":"Books"}, 
    {"link": "/author", "title":"Authors"}
];

function getUserName(req){
    let name = "Unknown user";
    if(req.user && req.user.name){
        name = req.user.name;
    }
    return name;
}

exports.send = function(req, res, next){
    res.send(res.body);
    next();
}

exports.booksRender = function(req, res, next){ 
    let books = res.body.data;    
    res.render(
        'books',
        {
            nav,
            "title": "Library",
            books,
            "userName": getUserName(req)
        }
    );
    next();
}

exports.bookRender = function(req, res, next){ 
    let book = res.body.data;
    res.render(
        'singleBook',
        {
            nav,
            "title": book.title,
            book,
            "userName": getUserName(req)
        }
    );
    next();
}

exports.homeRender = function(req, res, next){
    res.render(
        'index',
        {
            nav,
            "title": "Library",
            "userName": getUserName(req)
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