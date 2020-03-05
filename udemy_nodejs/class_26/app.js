var greet1 = require("./greet1");
greet1();

var greet2 = require("./greet2").greet;
greet2();

var greet3 = require("./greet3");
greet3.greet();
// changed the property inside the object that was required
greet3.greeting = "Changed Hello World";

// OBJECTS ARE CACHED BY REQUIRE MODULE
// when you call a new require for the same file
// it returns the sam eobject that was constructed, so as the property was changed, so was the return for the function greet()
// that is because node.js works with cached files when using require function
var greet3b = require("./greet3");
greet3.greet();


// With this approach I can keep creating new Greeters and they arent the same object. So the constructor is with us and we can decide when to create an object
var Greet4 = require("./greet4");
var greetr = new Greet4();
greetr.greet()



var greet5 = require("./greet5").greet;
greet5();