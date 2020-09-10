var http = require("http");

var server = http.createServer(function (req, res) {
  res.end("Hai, selamat datang di NodeJS");
});

server.listen(8000);

console.log("Server berjalan di http://localhost:8000");
