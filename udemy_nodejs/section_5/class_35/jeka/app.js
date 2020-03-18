var person = {
    firstmname: '',
    lastname: '',
    greet: function() {
        return this.firstmname + ' ' + this.lastname;
    }
}

var john = Object.create(person);
john.firstmname = 'John';
john.lastname = 'Doe';

// both of this object will point to the prototype, mas are different objects
var jane = Object.create(person);
jane.firstmname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());