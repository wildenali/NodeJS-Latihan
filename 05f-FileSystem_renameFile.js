var fs = require('fs');
fs.rename('05f-FileSystem_renameFile.txt', '05f-FileSystem_HasilrenameFile.txt', function (err) {
  if (err) {
    throw err;
  }
  console.log("File Renamed!");
})