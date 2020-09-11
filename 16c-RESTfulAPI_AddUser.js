var express = require('express');
var app = express();
var fs = require('fs');

var user = {
  "user4": {
    "name": "wilden",
    "password": "wadidaw",
    "proffesion": "Engineer",
    "id": 4,
  }
}

app.post('/addUser', function (req, res) {
  fs.readFile(__dirname + "/" + "16a-RESTfulAPI_users.json", 'utf8', function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  })
})

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("cek di http://localhost:8000");
})

// COBA pakai postman
// 1. http://127.0.0.1:8000/addUser