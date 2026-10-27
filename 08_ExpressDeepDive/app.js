const express = require('express');
const bodyparser = require('body-parser')
const app = express();

app.use((req,res,next) =>{
  console.log('First Dummy Middleware',req.url,req.method);
  next();
})

app.use((req,res,next) =>{
  console.log('Second Dummy Middleware',req.url,req.method);
  next();
})

// app.use((req,res,next) =>{
//   console.log('First Dummy Middleware',req.url,req.method);
//   res.send('<h1>Welcome to Complete Coding</h1>');
// })

app.get('/',(req,res,next) =>{
  console.log('handling / for GET',req.url,req.method);
  res.send('<h1>Welcome to Complete Coding</h1>');
});

app.get('/contact-us',(req,res,next) =>{
  console.log('handling /contact-us for GET',req.url,req.method);
  res.send(`
      <form action='/contact-us' method='POST'>
        <input type='text' name='name' placeholder='enter your name' />
        <input type='email' name='email' placeholder='enter your email' />
        <input type='submit' value='Submit' />
      </form>
    `);
});

app.post('/contact-us',(req,res,next) =>{
  console.log('handling /contact-us for POST',req.url,req.method,req.body);
  next();
});

app.use(bodyparser.urlencoded());

app.post('/contact-us',(req,res,next) =>{
  console.log('handling /contact-us for POST',req.url,req.method,req.body);
  res.send(`<h1> We'll contact you shortly..`);
});



const PORT = 3000;
app.listen(PORT,() => {
  console.log(`server running on http://localhost:${PORT}`);
});
