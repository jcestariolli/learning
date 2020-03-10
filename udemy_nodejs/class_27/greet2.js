module.exports.greet = function(){
    console.log("Hello World 2");
}

exports.greet = function(){
    console.log("Mutating the object here!")
}

console.log(exports);
console.log(module.exports);

