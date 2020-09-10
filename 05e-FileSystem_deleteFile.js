var fs = require('fs');
fs.unlink('05e-FileSystem_deleteFile.txt', function (err) {
  if (err) {
    throw err;
  }
  console.log("Deleted!");
})