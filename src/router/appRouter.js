const express = require('express');
const appRouter = express.Router();
const bookRouter = require('./bookRouter');
const adminRouter = require('./adminRouter');
const authRouter = require('./authRouter');
const responseHandler = require('../responseHandler/responseHandler');

const router = function(app) {    
    app.use("/books", bookRouter);
    app.use("/admin", adminRouter);
    app.use("/auth", authRouter);

    appRouter.get('/', responseHandler.homeRender);    
    app.get('/home', (req, res) => res.redirect('/'));    
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');  
    });

    return appRouter;
}

module.exports = router;