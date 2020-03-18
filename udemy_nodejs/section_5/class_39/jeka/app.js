// setting up prototype chain
// working with inherits method from module utils

var EventEmitter = require('events');
var util = require('util');

// to complete the inheritance, we need to inherity the porperties that maybe other consctructors can add to my object
function Greetr() {
    //EventEmitter is a function constructor, so when we pass this, we pass the object to the function constructor. Itsd like a super constructor
    EventEmitter.call(this); // we can use apply as well
    this.greeting = 'Hello World';
}

// All Greetr objects will get access to EventEmitter methods and properties
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ' ' + data);
    // here we can include the list of parameters to send to whoelse is listening to this function
    this.emit('greet', data);// comming from EventEmitter

}

var greetr1 = new Greetr();
// Prepare the listener to expect the parameter
greetr1.on('greet', function(data) {
    console.log('Someone greeted!');
});

greetr1.greet('Tony');