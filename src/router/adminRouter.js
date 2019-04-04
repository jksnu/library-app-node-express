const express = require('express');
const adminRouter = express.Router();
const adminCtrl = require('../controller/adminCtrl');
const responseHandler = require('../responseHandler/responseHandler');

function router(nav){        
    adminRouter.get('/', adminCtrl.insertBooks, responseHandler.send);
    return adminRouter;
}

module.exports = router;