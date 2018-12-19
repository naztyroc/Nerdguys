var MongoClient = require('mongodb').MongoClient;
var database = undefined;
var dbUrl = 'mongodb://db:27017/security';
MongoClient.connect(dbUrl, function(err, db) {
  if (err) {
    throw err;
  } else {
    database = db;
    console.log('MongoDB connection successful');
}
});

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
