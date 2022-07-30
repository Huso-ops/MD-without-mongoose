const express = require("express");
const mongoose = require("mongoose");
const app = express();
const phoneRoute = require("./route/phoneRoute");
const bodyParser = require("body-parser");

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const phone2 = require("./model/phone");



app.get("/", (req, res) => {

    try {

      res.status(200).json({ message: "Api is working! Say hello" });
    } catch (error) {

      res.status(500).json({ message: error });

    }
  });
  let db;

let connectionString = "mongodb+srv://huso:3rcGPzoUA6UR6sSi@nestjs.77vms.mongodb.net/redis?retryWrites=true&w=majority";

app.use(bodyParser.json());

app.use("/api/phone",phoneRoute);
/*
mongoose.connect("mongodb+srv://huso:3rcGPzoUA6UR6sSi@nestjs.77vms.mongodb.net/redis?retryWrites=true&w=majority")
.then(async()=>{

console.log("MongoDB connected");

mongodbConnected = true;
}).catch(err=>{

    console.log(err);

});
*/
/*
MongoClient.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db()
 
console.log("mongodb Connect")
  }
)
*/


app.listen(8080, ()=> {
    console.log("DB CONNECTED")
});



app.post('/add2', function (req, res) {
  // Sending request to create a data
  db.collection('phone2').insertOne({ 
  name: req.body.name,
  phoneNumber: req.body.phoneNumber,
  email: req.body.email
}, function (
    err,
    info
  ) {
    res.json(info)
    console.log(info);
  })
  
})

app.get('/get2', function (req, res) {
  // getting all the data
  db.collection('data')
    .find()
    .toArray(function (err, items) {
      res.send(items)
    })
})

app.put('/update2/:id', function (req, res) {
  // updating a data by it's ID and new value
  db.collection('phone2').findOneAndUpdate(
    { _id: new mongodb.ObjectId(req.body._id) },
    { $set: {  name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email } },
    function () {
      console.log(res);
      res.send('Success updated!')
    }
  )
})

app.delete('/delete2/:id', function (req, res) {
  // deleting a data by it's ID
  db.collection('phone2').deleteOne(
    { _id: new mongodb.ObjectId(req.body._id) },
    function () {
      res.send('Successfully deleted!')
    }
  )
})