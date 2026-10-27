const express = require('express')
const userHandler = require("./user");

const app = express();

app.get("/",(req,res,next) => {
    console.log('First Middleware',req.url,req.method);
    // res.send('<p>Came from first middleware!</p>');
    next();
});

app.post("/submit-details",(req,res,next) => {
    console.log('Second Middleware',req.url,req.method);
    res.send('<p>Welcome to the Complete Coding Node.js Series</p>');
});

app.use("/",(req,res,next) => {
    console.log('Another Middleware',req.url,req.method);
    res.send('<p>Came from Another middleware!</p>');
});

  
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});