var fs = require('fs');
fs.appendFile('05b-FileSystem_tambahFile.txt', 'Wooooy ini isinya', function (err) {
  if (err) {
    throw err;
  }
  console.log("Saved");
})