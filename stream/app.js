var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, response) {
    response.writeHead(200, {"Content-type": "text/html"});
    fs.createReadStream(__dirname + "/index.html").pipe(response);
  })
  .listen(1337, "127.0.0.1");
