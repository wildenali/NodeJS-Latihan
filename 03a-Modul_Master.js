var http = require('http');
var waktu = require('./03a-Modul_Waktu');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Waktu sekarang adalah ' + waktu.waktuKu());
  res.end();
}).listen(8000);