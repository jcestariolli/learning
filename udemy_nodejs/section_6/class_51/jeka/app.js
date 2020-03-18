var fs = require('fs');

// with this we read the file and obtain a buffer from the method, with the contents from the file
// this text file is huge and larger than the buffer size, so it will take pieces of the file and respond with those pieces
var readable = fs.createReadStream(
	__dirname + '/greet.txt', 
	// options
	{ 
		encoding: 'utf8' // to get strings instead of buffers
		,highWaterMark: 16 * 1024 
		// 16 Kbytes
		// number of bytes we want the buffer size to be, the chunk to be
	}
);

// to deal with files, we create an writeable stream
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// each time it retrieves a chunk, it passes to the callback function of readable
readable.on('data', function(chunk) {
	console.log('\nChunk retrieved! -------------------- Size: ' + chunk.length);
	//console.log(chunk);
	//writable.write('\nChunk retrieved! -------------------- Size: ' + chunk.length);
	writable.write(chunk); // so it wirtes that chunk on the file
});

