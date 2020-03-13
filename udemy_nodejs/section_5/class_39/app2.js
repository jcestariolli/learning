var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function(){
    console.log(`Hello ${ this.firstname} ${this.lastname}`);
}

// we connect the prototypes, but we need to use the super constructor (Person)
function PoliceMan() {
    // calls the constructor of Person Object
    Person.call(this);
    this.badgeNumber = '123456';
}
// Makes the inheritance between PoliceMan and Person
util.inherits(PoliceMan, Person);



var officer = new PoliceMan();
officer.greet();