var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function name(err, db) {
  if (err) throw err;
  var myDB = db.db("mydb");
  var myObj = { name: "Company Inc", address: "Highway 37" };
  myDB.collection("kastemers").insertOne(myObj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  })
})