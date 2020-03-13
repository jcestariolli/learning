var obj = {
    name: 'John Doe',
    greet: function() {
        // using ES6
        console.log(`Hello ${ this.name}`)
    }
};

obj.greet();
// I can use the method call and pass an object, so "this" call will use the passed object, not the previously created one
// for call, we can use commas to separate those parameters
// ex: call(obj, param1, param2,...)
obj.greet.call({  
    name: 'Jane Doe'
});

// for apply, we can pass the parameters using an array, so
// ex: apply(obj, [param1, param2])
obj.greet.apply({  
    name: 'Jane Doe'
});

// those methods are used to get borrowed methods from other objects and get this working with my object