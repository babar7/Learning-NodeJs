var obj = {
  name: "John Doe",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

obj.greet();
obj.greet.call({name: "Jane Doe"}, "param1", "param2");
obj.greet.apply({name: "James Doe"}, ["param1, param2"]);
