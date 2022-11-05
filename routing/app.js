var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, response) {
    if (req.url === "/") {
      fs.createReadStream(__dirname + "/index.html").pipe(response);
    } else if (req.url === "/api") {
      response.writeHead(200, {"Content-type": "application/json"});
      var obj = {
        a: "something",
        b: " something else",
      };
      var str = JSON.stringify(obj);
      response.end(str);
    } else {
      response.writeHead(404);
      response.end();
    }
  })
  .listen(1337, "127.0.0.1");
