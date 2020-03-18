// node module to work with filesystem
var fs = require('fs');

var greetFile = '/greet.txt';

// method to obtain the text from file
// the __dirname gives the path where this app is running
// the readFileSync is a synchronous approach to wait till the buffer is filled, before the engine run the rest of code
var greet = fs.readFileSync(__dirname + greetFile, 'utf8');
console.log(greet);

// If we want to work with file assynchronously, we pass a callback function
// this using a buffer to load files. If the file is very large or many people is running this app, we can run out of memmory in node
var greet2 = fs.readFile(
    __dirname + greetFile, 
    'utf8', // when we set the encoding, it automatically converts the response to String
     function(err, data){
         if (err) {
             console.log(`An error occured: ${error}`);
         }
         console.log(`Data retrieved: ${data}`);
        console.log(data);
    }
);

console.log('Done!');
