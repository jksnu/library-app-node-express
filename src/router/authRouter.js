const express = require('express');
const authRouter = express.Router();
const authCtrl = require('../controller/authCtrl');
const responseHandler = require('../responseHandler/responseHandler');
const passport = require('passport');
const libraryUtil = require('../utils/libraryUtil');

const authOption = {
    successRedirect: '/books',
    failureRedirect: '/'
};

function router(nav){ 
    authRouter.post('/signin', passport.authenticate('local', authOption));
    authRouter.post('/signup', authCtrl.addUser, responseHandler.send);
    authRouter.get('/profile', authCtrl.getUserProfile, responseHandler.send);
    
    return authRouter;
}

module.exports = router;