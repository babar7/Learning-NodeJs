var userName = "John";

(function (uName) {
  var userName = "Jane";
  console.log(userName);
  console.log(uName);
})("Doe");

console.log(userName);
