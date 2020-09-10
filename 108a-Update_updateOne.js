var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var myDB = db.db("mydb");
  var myQuery = { address: "Valley 345" };
  var newValues = { $set: { name: "Mikey", address: "Kenyon 121" } };
  myDB.collection("kastemers").updateOne(myQuery, newValues, function (err, res) {
    if (err) throw err;
    console.log("1 document terupdate");
    db.close();
  });
});