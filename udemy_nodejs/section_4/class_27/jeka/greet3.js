// replace exports with my own object
// so we use a function constructor for an object

function Greetr() {
    this.greeting = "Hello World 3";
    this.greet = function(){
        console.log(this.greeting);
    }
}

// Creates a new object as we described
module.exports = new Greetr();