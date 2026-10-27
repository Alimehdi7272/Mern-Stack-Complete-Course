// Core Modules
const path = require('path')

// External Module
const express = require('express');

// Local Modules
const rootDir = require('./utils/pathUtil');
const contactRouter = require('./routes/contactRouter');
const homeRouter = require('./routes/homeRouter');


const app = express();


app.use(express.urlencoded());

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
})

app.use(homeRouter)
app.use(contactRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server running on http://localhost:${PORT}`);
});