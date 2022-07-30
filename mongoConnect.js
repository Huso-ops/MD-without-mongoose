const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
/*
let db;

let connectionString = "mongodb+srv://huso:3rcGPzoUA6UR6sSi@nestjs.77vms.mongodb.net/redis?retryWrites=true&w=majority";
const mongoConnect = callback => {
MongoClient.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
      db = client.db()
   
  console.log("mongodb Connect")
    }
  )

  }
const getDb = () => {
  if (db) {
    return db;
  }
  throw 'No Database found!';
};

module.exports = mongoConnect;
module.exports = getDb;
*/