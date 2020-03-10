// if your module has the same name of a native module, you should give the path to your file. 
// But is not recommended to use the same name of a core module
var util = require("util");

var name = "Jeka"
var greeting = util.format("Hello %s!", name);
util.log(greeting);