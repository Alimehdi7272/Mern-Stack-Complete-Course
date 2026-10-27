// External Module
const express = require('express')
const userRouter = express.Router();
// Local Module
const homesControllers = require('../controller/homes');

userRouter.get("/",homesControllers.getHomes);

module.exports = userRouter;