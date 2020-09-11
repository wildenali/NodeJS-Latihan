var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var myDB = db.db("mydb");
  var myQuery = { address: /^S/ };
  var newValues = { $set: { name: "Mikey" } };
  myDB.collection("kastemers").updateMany(myQuery, newValues, function (err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " documents terupdate");
    db.close();
  });
});