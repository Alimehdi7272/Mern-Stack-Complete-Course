// Core Module
const path = require('path')

// External Module
const express = require('express');

// Local Module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');



const app = express();
app.use(express.static(path.join(rootDir,'public')));

app.use(express.urlencoded());

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

 app.use(userRouter);
 app.use('/host',hostRouter);

 app.use((req,res,next) => {
        res.status(404).sendFile(path.join(rootDir,'views','404.html'));
      // res.status(404).send('<h1>404 Your Page is not found on airbnb</h1>');
 });


const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server running on http://localhost:${PORT}`);
})