var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var myDB = db.db("mydb");
  myDB.collection("kastemers").find({}, { projection: { address: 0 } }).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});