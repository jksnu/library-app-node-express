const express = require('express');
const bookRouter = express.Router();
const bookCtrl = require('../controller/bookCtrl');
const responseHandler = require('../responseHandler/responseHandler');

function router(nav){       
    bookRouter.get('/', bookCtrl.getBooks, responseHandler.booksRender);
    bookRouter.get('/singleBook/:id', bookCtrl.getBook, responseHandler.bookRender);
    
    return bookRouter;
}

module.exports = router;