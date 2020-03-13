var EventEmitter = require('events');

// using strict version of JS
'use strict';

// util.inherits(Greetr, EventEmitter) is changed to extends
module.exports = class Greetr extends EventEmitter {
    constructor() {
        super(); // instead of EventEmitter.call(this);
        this.greeting = 'Hello World!';
    }

    greet(data) {
        console.log(`${ this.greeting }: ${data}`);
        this.emit('greet', data);
    }
}