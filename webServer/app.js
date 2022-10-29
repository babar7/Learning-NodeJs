// var http = require("http");

// // takes a callback
// // its a listner
// http
//   .createServer(function (request, response) {
//     //1. status code

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("hello world\n");

//     // listen(port, ip/api)
//   })
//   .listen(1337, "127.0.0.1");

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, response) {
    response.writeHead(200, {"Content-type": "text/html"});
    var html = fs.readFileSync(__dirname + "/index.html");
    response.end(html);
  })
  .listen(1337, "127.0.0.1");
