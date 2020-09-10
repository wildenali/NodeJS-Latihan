var fs = require('fs');
fs.writeFile('05c-FileSystem_writeFile.txt', 'Wooooy ini Write File', function (err) {
  if (err) {
    throw err;
  }
  console.log("Tersimpan");
})