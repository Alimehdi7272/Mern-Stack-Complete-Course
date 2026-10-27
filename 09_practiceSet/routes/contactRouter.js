const path = require('path');
const express = require('express');
const rootDir = require('../utils/pathUtil')

const userform = express.Router();

userform.get('/contact-us',(req,res,next) =>{
   res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

userform.post('/contact-us',(req,res,next) => {
    console.log(req.body)
    res.sendFile(path.join(rootDir,'views','detailAdded.html'))
})

module.exports = userform;