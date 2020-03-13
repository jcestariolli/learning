var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

// Magic Strings: a string that has some special meaning in our code
// So it can causes a bug

// One way to deal with this with a pattern (similar to ENUM):
emtr.on(eventConfig.GREET, function(){
    console.log("Somewhere, someone said Hello. ");
});

emtr.on(eventConfig.GREET, function(){
    console.log("A greeting occurred!");
});

console.log("Hello");
emtr.emit('greet');