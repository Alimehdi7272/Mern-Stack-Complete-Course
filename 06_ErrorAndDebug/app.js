const http = require("http");
const testingSyntax = require('./syntax');
const testingRuntime = require('./runtime');
const logical = require("./logical");

const server = http.createServer((req,res) =>{
  console.log(req.url,req.method);
  // testingSyntax();
  // testingRuntime();
  logical()
}) ;
  
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});