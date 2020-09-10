/*
// Percobaan 1
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(req.url);
  res.end();
}).listen(8000);
*/

// Percobaan 2
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8000);

// 1. Run program nya
// 2. Masukan ini di browser http://localhost:8000/?year=2020&month=September
// 3. Enter dan lihat hasilnya