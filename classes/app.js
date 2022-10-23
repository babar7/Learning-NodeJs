// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }

//   greet() {
//     console.log("Hello, " + this.firstName + " " + this.lastName);
//   }
// }

// var john = new Person("john", "doe");

// john.greet();

var EventEmitter = require("events");

class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello world!";
  }
  greet(data) {
    console.log(this.greeting + data);
    this.emit("greet", data);
  }
}
var greeter1 = new Greetr();

greeter1.on("greet", function (data) {
  console.log("some thing", data);
});

greeter1.greet("Tony");
