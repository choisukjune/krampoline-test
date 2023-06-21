var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080
console.log("server start!!!!!!")

fs.writeFileSync("test.txt", "blah,blah,blah,blah,blah,blah,blah,blah,", {flag:"w"});