var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, response) {
    response.writeHead(200, {"Content-type": "application/json"});

    var obj = {
      a: "something",
      b: " something else",
    };
    var str = JSON.stringify(obj);
    response.end(str);
  })
  .listen(1337, "127.0.0.1");
