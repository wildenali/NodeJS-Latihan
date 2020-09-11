var fs = require('fs');
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('13a-Stream_input.txt');

// Set the encode to be utf8
readerStream.setEncoding('utf8');

// Handle stream events --> data, end, and error
readerStream.on('data', function (chunk) {
  data += chunk;
})

readerStream.on('data', function () {
  console.log(data)
});

readerStream.on('error', function (err) {
  console.log(err.stack);
});

console.log("Program Ended");