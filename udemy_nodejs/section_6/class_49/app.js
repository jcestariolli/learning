function greet(callback) {
    console.log('\nHello!');
    var data = {
        name: 'John Doe'
    };
    callback(data);
}


greet(function(data){
    console.log('\nThe callback was invoked');
    console.log(data);
});


greet(function(data){
    console.log('\nA different callback');
    console.log(data.name);
});