// object properties and methods
var obj = {
    greet: "Hello from greet obj"
}

console.log(obj.greet);
console.log(obj["greet"]); 


// so the variable could de dynamic
var prop = "greet";
console.log(obj[prop]); 


// functions and arrays
var arr = [];
// i can push variables inside the array
arr.push(function(){
    console.log("Hello, Im the function 1 inside an array");
}); 
arr.push(function(){
    console.log("Hello, Im the function 2 inside an array");
}); 
arr.push(function(){
    console.log("Hello, Im the function 3 inside an array");
}); 

// i can loop inside the array to call the functions
arr.forEach(function(item){
    item();
});