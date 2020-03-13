// Working with ES6 classes
// new way to build objects, only in syntax
// so its called Syntatic Sugar - a feature that changes how you type, but doesnt change the behaviour

// Changing to use new ES6 classes
// helps u not making silly mistakes, so it helps compiling with the best way
'use sctrict';

// from ES6, its a cleaner way to build the code and setting properties and methods
// NOTE: in JS classes is just syntax sugar
// this also can confuse about prototype chain, that isnt as in other languages, where classes are more complexx
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log(`Hello ${ this.firstname} ${this.lastname}`);
    }
}

var john = new Person('John','Doe');
john.greet();

var jane = new Person('Jane','Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(jane.__proto__ === john.__proto__);