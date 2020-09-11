var express = require('express');
const { response } = require('express');
var app = express();

app.use(express.static('public'));
app.get('/15c-Express_index.html', function (req, res) {
  res.sendFile(__dirname + "/" + "15c-Express_index.html");
})

app.get('/process_get', function (req, res) {
  // Prepare output in JSON format
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8000, function () {
  var host = server.address.address
  var port = server.address.port

  console.log("Contoh app listening at http://localhost:8000");
})

// Coba
// 1. http://127.0.0.1:8000/15c-Express_index.html