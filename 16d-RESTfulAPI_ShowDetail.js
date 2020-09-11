var express = require('express');
var app = express();
var fs = require('fs');

app.get('/:id', function (req, res) {
  // First read existing users
  fs.readFile(__dirname + "/" + "16a-RESTfulAPI_users.json", 'utf8', function (err, data) {
    var users = JSON.parse(data);
    var user = users["user" + req.params.id];
    console.log(user);
    res.end(JSON.stringify(users));
  });
});

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("cek di http://localhost:8000");
})

// COBA
// 1. http://127.0.0.1:8000/2