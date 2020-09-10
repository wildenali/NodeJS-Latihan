var http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello <b>world</b>");
  res.end();
}).listen(8000);

console.log("Server berjalan di http://localhost:8000");
