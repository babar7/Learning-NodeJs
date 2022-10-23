// var fs = require("fs");

// var greet = fs.readFileSync(__dirname + "/greet.txt", "utf8");

// console.log(greet);

// var greet2 = fs.readFile(
//   __dirname + "/greet.txt",
//   "utf8",
//   function (err, data) {
//     err && console.log(err, "has Error");
//     console.log(data);
//   }
// );

// console.log("Done!");

var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/greet.txt", {
  encoding: "utf8",
  highWaterMark: 32, // chunks size in bytes
});

var writeable = fs.createWriteStream(__dirname + "/greetCopy.txt");

readable.on("data", function (chunk) {
  //   console.log(chunk);
  writeable.write(chunk);
});
