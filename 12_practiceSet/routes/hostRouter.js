// External Module
const express = require('express');
const hostRouter = express.Router();
// Local Module
const hostControllers = require('../controller/hostController')

hostRouter.get("/add-home",hostControllers.getAddHome);
hostRouter.post("/add-home",hostControllers.postAddHome);
hostRouter.get("/host-home-list",hostControllers.getHostHomes);

module.exports = hostRouter;
