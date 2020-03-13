// setting up prototype chain
// working with inherits method from module utils

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
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