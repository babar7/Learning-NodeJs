var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/greet.txt", {
  encoding: "utf8",
  highWaterMark: 32, // chunks size in bytes
});

var writeable = fs.createWriteStream(__dirname + "/greetCopy.txt");

var compressed = fs.createWriteStream(__dirname + "/greet.txt.gz");
var gzip = zlib.createGzip();

readable.pipe(writeable);

readable.pipe(gzip).pipe(compressed);
