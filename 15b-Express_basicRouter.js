var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  console.log("Got a GET request for the homepage");
  res.send('Hello GET');
});

// This responds a POST request for a homepage
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
});

// This responds a DELETE request for the /del_user page
app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for the homepage");
  res.send('Hello POST');
});

// This responds a GET request for the /list_user page
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
});

var server = app.listen(8000, function () {
  var host = server.address.address
  var port = server.address.port

  console.log("Contoh app listening at http://localhost:8000");
});

// Coba
// 1. http://localhost:8000/
// 2. http://localhost:8000/list_user
// 3. http://localhost:8000/abcd
// 4. http://localhost:8000/abadasdasdacd
// 5. http://localhost:8000/ab123v123cd
// 6. http://localhost:8000/abBISANGACAKcd