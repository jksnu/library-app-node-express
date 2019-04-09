const express = require('express');
const adminRouter = express.Router();
const adminCtrl = require('../controller/adminCtrl');
const responseHandler = require('../responseHandler/responseHandler');
const libraryUtil = require('../utils/libraryUtil');

function router(nav){     
    adminRouter.use(libraryUtil.authenticateRoute);   
    adminRouter.get('/', adminCtrl.insertBooks, responseHandler.send);
    return adminRouter;
}

module.exports = router;