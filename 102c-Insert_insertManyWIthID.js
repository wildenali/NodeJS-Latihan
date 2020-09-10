var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function name(err, db) {
  if (err) throw err;
  var myDB = db.db("mydb");

  var myObj = [
    { _id: 160, name: 'Chocolate Panas' },
    { _id: 161, name: 'Jeruk Dingin' },
    { _id: 162, name: 'Vanilla Kopi' },
    { _id: 163, name: 'Kopi Susu' },
    { _id: 164, name: 'Es Lemon Panas' },
    { _id: 165, name: 'Vanilla Susu Kopi' }
  ]

  myDB.collection("kastemers").insertMany(myObj, function (err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  })
})