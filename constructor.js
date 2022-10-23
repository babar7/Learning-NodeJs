function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function () {
  console.log("hello" + this.firstName + this.lastName);
};

var john = new Person("john", "Doe");
var jane = new Person("jane", "Doe");

console.log(john);
