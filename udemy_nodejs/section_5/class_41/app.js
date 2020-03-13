var EventEmitter = require('events');
var util = require('util');

// using strict version of JS
'use strict';

// util.inherits(Greetr, EventEmitter) is changed to extends
class Greetr extends EventEmitter {
    constructor() {
        super(); // instead of EventEmitter.call(this);
        this.greeting = 'Hello World!';
    }

    greet(data) {
        console.log(`${ this.greeting }: ${data}`);
        this.emit('greet', data);
    }
}


var greetr1 = new Greetr();
greetr1.on('greet', function(data) {
    console.log('Someone greeted!');
});
greetr1.greet('Tony');