// Buffer doesnt require to require any module

// utf-8 is the default encoding, if we dont inform it, Buffer presumes it
var buf = new Buffer('Hello', 'utf8');

console.log('\nBuffer:');
console.log(buf);
// its outputting is <Buffer 48 65 6c 6c 6f>

console.log('\nBuffer > JSON:');
console.log(buf.toJSON());
// its outputting is { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }

console.log('\nBuffer > String:');
console.log(buf.toString());

// it behaves as an array, so I can do
console.log('\nBuffer > position 3:');
console.log(buf[2]);
// output is 108

// as buffer is a finite space in memory, it rewrite the frist two positions with wo
buf.write('wo');
console.log('\nBuffer > rewrited:');
console.log(buf.toString());




console.log('\n\n');
