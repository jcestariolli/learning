/* 
when you wrap in parenthesis it becomes an expression, not just a function statement
So the engine will interpret this as an object, and you can keep using it
 */
var firstname = "Jane";

(function (lastname) {
    // here this variable isnt affected by the outside scope
    var firstname = "Jeka";
    console.log(firstname);
    console.log(lastname);
}('Cestariolli'));
// imediatelly invoked function expression

console.log(firstname);