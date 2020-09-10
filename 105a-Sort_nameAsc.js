var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var myDB = db.db("mydb");
  // var mySort = { name: 1 };
  var mySort = { name: -1 };
  myDB.collection("kastemers").find().sort(mySort).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});