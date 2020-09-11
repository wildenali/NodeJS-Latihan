var fs = require('fs');
var data = 'Gampang ko cara Write Stream';

// Create a writable stream
var writeStream = fs.createWriteStream('13b-Stream_hasilWrite.txt');

// Write the data to stream with encoding to be utf8
writeStream.write(data, 'utf8');

// Mark the end of file
writeStream.end();

// Handle stream events --> finish, and error
writeStream.on('finish', function () {
  console.log('Write completed');
});

writeStream.on('error', function (err) {
  console.log(err.stack);
})

console.log("Udah gitu aja");