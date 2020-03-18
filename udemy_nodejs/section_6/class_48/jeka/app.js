// 64 bits of data - 8 bytes of 8 bits each one
var buffer = new ArrayBuffer(8);

// way to deal with my binary data
// this array only hold 2 bytes
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view)