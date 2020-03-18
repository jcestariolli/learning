// Basically this is the standard form to concatenate strings
var name =  'John Doe';
var greet = 'Hello - ' + name;

// with ES6, we can use template literals, so:
//backtick - not a regular quote
// that tells to js engine that this is gonna be a template literal
// inside the curly braces I can put js variables
var greet2 = `Hello ${name}`

console.log(greet);
console.log(greet2);