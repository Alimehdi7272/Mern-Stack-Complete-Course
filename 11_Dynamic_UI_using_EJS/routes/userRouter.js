const express = require('express')

const {registeredHomes} = require('./hostRouter');

const userRouter = express.Router();

userRouter.get("/",(req,res,next) => {
  console.log(registeredHomes);
  res.render('home',{registeredHomes:registeredHomes,pageTitle:'airbnb Home'});
});

module.exports = userRouter;