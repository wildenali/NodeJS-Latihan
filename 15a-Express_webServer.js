var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World Coy');
})

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Contoh app listening at http://localhost:8000",);
})