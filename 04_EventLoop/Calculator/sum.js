const { json } = require("node:stream/consumers");

const sumRequestHandler = (req,res) =>{
    console.log('In sum request Handler',req.url);
    const body = [];
    let result ;
    req.on('data', chunk =>{
      body.push(chunk);
    });
    req.on('end',()=>{
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody)
      const jsonObject = Object.fromEntries(params);
      result = Number(jsonObject.firstNumber) + Number(jsonObject.secondNumber)
      console.log(result);
    });
    res.setHeader('Content-Type','text/html')
      res.write(`
      <html >
        <head>
          <title>Practice Set</title>
        </head>
        <body>
          <h1>The result is ${result}</h1>
        </body>
        </html>
      `);
      res.end();
}

module.exports = sumRequestHandler