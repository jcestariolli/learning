// function statement
// a função escrita
function greet() {
    console.log("A");
}
greet();

// functions are first class
// ou seja, a capacidade de usá-las como objetos
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
// a capacidade de criar a expressão de uma função "on the fly"
var greetMe = function() {
    console.log("BB");
}
greetMe();

// its first class
// então posso passá-la como parâmetro de outra função
logGreeting(greetMe);


// use a function expression on the fly
logGreeting(function(){
    console.log("CCC")
});