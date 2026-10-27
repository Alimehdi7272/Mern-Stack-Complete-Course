const path = require('path')
const express = require('express');


const hostRouter = express.Router();

hostRouter.get("/add-home",(req,res,next) => {
   res.render('addHome',{pageTitle:'Add Home to airbnb',currentPage:'addHome'});
});

const registeredHomes = [];

hostRouter.post("/add-home",(req,res,next) => {
  console.log(req.body)
  registeredHomes.push(req.body);
  res.render('homeAdded',{pageTitle:'Home added successfully',currentPage:'homeAdded'});
});

exports.hostRouter = hostRouter;
exports.registeredHomes  = registeredHomes;
