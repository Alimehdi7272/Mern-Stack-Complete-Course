const path = require('path');
const express = require('express');
const rootDir = require('../utils/pathUtil');

const home = express.Router();

home.get('/',(req,res,next) => {
   res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports = home;