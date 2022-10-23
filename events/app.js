var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("greet", () => console.log("Something happend"));

emtr.on("greet", () => console.log("another"));

console.log("heelo!");
emtr.emit("greet");
