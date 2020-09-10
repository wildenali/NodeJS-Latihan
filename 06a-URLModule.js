var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("Halaman Tidak ditemukan");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  })
}).listen(8000);

// 1. Masukan http://localhost:8000/06a-URLModule_summer.html
// 2/ kemudia coba juga masukan http://localhost:8000/06a-URLModule_winter.html