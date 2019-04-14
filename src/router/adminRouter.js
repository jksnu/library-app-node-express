const express = require('express');
const adminRouter = express.Router();
const adminCtrl = require('../controller/adminCtrl');
const responseHandler = require('../responseHandler/responseHandler');
const libraryUtil = require('../utils/libraryUtil');

adminRouter.use(libraryUtil.authenticateRoute);   
adminRouter.get('/', adminCtrl.insertBooks, responseHandler.send);

module.exports = adminRouter;