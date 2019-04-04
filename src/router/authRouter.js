const express = require('express');
const authRouter = express.Router();
const authCtrl = require('../controller/authCtrl');
const responseHandler = require('../responseHandler/responseHandler')

function router(nav){ 
    
    authRouter.post('/signin', authCtrl.authenticate, responseHandler.authRoute);

    authRouter.route("/signup").post((req, res) => {});

    authRouter.get('/profile', authCtrl.getUserProfile, responseHandler.send);
    
    return authRouter;
}

module.exports = router;