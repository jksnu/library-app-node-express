const express = require('express');
const bookRouter = express.Router();
const bookCtrl = require('../controller/bookCtrl');
const responseHandler = require('../responseHandler/responseHandler');
const libraryUtil = require('../utils/libraryUtil');

bookRouter.use(libraryUtil.authenticateRoute);     
bookRouter.get('/', bookCtrl.getBooks, responseHandler.booksRender);
bookRouter.get('/singleBook/:id', bookCtrl.getBook, responseHandler.bookRender);

module.exports = bookRouter;