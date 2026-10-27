// Core Module
const path = require('path')

// External Module
const express = require('express');

// Local Module
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
const errorController = require('./controller/error')



const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootDir,'public')));

app.use(express.urlencoded());

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

 app.use(userRouter);
 app.use('/host',hostRouter);

 app.use(errorController.get404);


const PORT = 3000;
app.listen(PORT,() => {
  console.log(`Server running on http://localhost:${PORT}`);
})