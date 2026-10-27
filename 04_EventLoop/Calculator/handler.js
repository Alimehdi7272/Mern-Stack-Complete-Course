const sumRequestHandler = require('./sum')

const requestHandler = (req,res) => {
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html')
    res.write(`
      <html >
        <head>
          <title>Practice Set</title>
        </head>
        <body>
          <h1>Welcome to the Calculator</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
        </html>
      `);
    return res.end();
  }
  else if(req.url === '/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write(`
        <html >
        <head>
          <title>Calculator</title>
        </head>
        <body>
            <form action="/calculate-result" method="POST">
              <input type="text" placeholder="enter 1st Number" name = "firstNumber">
              <input type="text" placeholder="enter 2nd Number" name = "secondNumber">
              <input type="submit" value="Sum">
            </form>
        </body>
        </html>
    `)
    return res.end();
  }
  else if(req.url.toLowerCase() === '/calculate-result' && req.method ==='POST'){
    return sumRequestHandler(req,res);
  }
 
  res.setHeader('Content-Type','text/html')
    res.write(`
      <html >
        <head>
          <title>Practice Set</title>
        </head>
        <body>
          <h1>404 Page Does not Exist</h1>
          <a href="/">Go to Home</a>
        </body>
        </html>
      `);
    res.end();
}

module.exports = requestHandler;