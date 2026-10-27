const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url,req.method);
    if(req.url === '/home'){
      res.write('<h1>Welcome to Home</h1>')
      return res.end();
    }
    else if(req.url === '/men'){
      res.write('<h1>Welcome to Men</h1>')
      return res.end();
    }
    else if(req.url === '/women'){
      res.write('<h1>Welcome to Women</h1>')
      return res.end();
    }
    else if(req.url === '/kids'){
      res.write('<h1>Welcome to Kids</h1>')
      return res.end();
    }
    else if(req.url === '/cart'){
      res.write('<h1>Welcome to Cart</h1>')
      return res.end();
    }
  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html >
        <head>
          <title>Myntra</title>
        </head>
        <body>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Women</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>  
        </body>
      </html>
    `)
  res.end();
})

const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`server running on http://localhost:${PORT}`);
})