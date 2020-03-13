var EventEmitter = require('events');

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