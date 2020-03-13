// setting up prototype chain
// working with inherits method from module utils

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello World';
}

// All Greetr objects will get access to EventEmitter methods and properties
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
    console.log(this.greeting);
    this.emit('greet');// comming from EventEmitter
}

var greetr1 = new Greetr();
greetr1.on('greet', function() {
    console.log('Someone greeted!');
});

greetr1.greet();