var greeting = "Hello World 5";
function greet(){
    console.log(greeting);
}

// exposing the function and not the variable
// and this way, we only expose the functions, not the variables
// this is called the revealing module pattern
module.exports = {
    greet: greet
}