var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var myDB = db.db("mydb");
  myDB.collection("kastemers").findOne({}, function (err, result) {
    if (err) throw err;
    console.log("Hasilnya adalah: " + result.name);
    db.close();
  });
});