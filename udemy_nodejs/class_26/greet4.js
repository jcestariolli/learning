function Greetr() {
    this.greeting = "Hello World 4";
    this.greet = function(){
        console.log(this.greeting);
    }
}

// Instead of creeating a new object, I give to my module the ability to create a new object
module.exports = Greetr;