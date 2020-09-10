var fs = require('fs');
fs.writeFile('05d-FileSystem_updateFile.txt', 'Ganti Isinya', function (err) {
  if (err) {
    throw err;
  }
  console.log("Tersimpan");
})