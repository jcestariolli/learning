var person = {
    firstname:  "Jeka",
    lastname:   "Cestariolli",
    greet:      function() {
        console.log("Olar " + this.firstname + " " + this.lastname);
    }
}

person.greet();

// outra forma de acessar
console.log(person["firstname"]);

//ou então
person["greet"]();

//util quando vc vai chamar algo dinamicamente