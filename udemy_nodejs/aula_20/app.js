// Criando construtores de objetos

// Capital letter to remind that this is a constructor
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
// incluindo atributos no prototipo do objeto
Person.prototype.greet = function() {
    console.log("Hello " + this.firstname + ' ' + this.lastname);
}


var jeka = new Person("Jeka","Cestariolli");
// chamando o método do prototipo
jeka.greet();


var jane = new Person('Jane','Amiguinha');
jane.greet();

console.log(jeka.__proto__);
console.log(jane.__proto__);
console.log(jeka.__proto__ === jane.__proto__);