// function greet() {
//   console.log("hello world !");
// }

// // functions are first-class
// function logGreeting(cb) {
//   cb();
// }

// logGreeting(greet);

// Module
var g = import("./greet.js");
console.log(g);
