var fs = require('fs');
var zlib = require('zlib'); // module to compress and uncompress files


var readable = fs.createReadStream(__dirname + '/greet.txt');
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// writable stream is sent to pipe
// and returns the stream
// the format is source.pipe(destination)
// if return is an writeable stream, i can pipe continously (method chaining)
// the return is always the parameter (destination, in this case var writable)
readable.pipe(writable); // wirtable isnt readable

// we can stream the chunk of data in various uses
// compressed is writeable
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// Creates a transform stream (readable and writeable)
// but isnt writing anywhere else than the object (as a file, for example)
var gzip = zlib.createGzip();

// the pipe for gzip returns gzip itself
// so I write the content inside gzip, that compresses the data, and then read from gzip and write to compressed
readable.pipe(gzip).pipe(compressed);
