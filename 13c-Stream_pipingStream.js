var fs = require('fs');

// Create a readable stream
var readerStream = fs.createReadStream('13c-Stream_input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('13c-Stream_output.txt');

// Pipe the rad and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Propgram Ended");