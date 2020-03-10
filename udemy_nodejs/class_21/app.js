// pass by value and by reference

// pass by value
// so as it receives a primitve value, b becomes a copy of this value. So b is in a different spot in memory
function change(b) {
    b = 2;
}

// a is a primitive value, so doesnt matter if you try to change inside the function
var a = 1;
change(a);

console.log(a);



// pass by reference
function changeObj(d) {
    d.prop1 = function(){};
    d.prop2 = {};
}

var c = {};

c.prop1 =  {};
changeObj(c);
console.log(c);