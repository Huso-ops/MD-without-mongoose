var Phone = require("../model/phoneModel");
var phone2 = require("../model/phone.js");
const url = "mongodb+srv://huso:3rcGPzoUA6UR6sSi@nestjs.77vms.mongodb.net/redis?retryWrites=true&w=majority";
const collection = ["phone2","data","phones"];
const mongojs = require("mongojs");
const db = mongojs(url,collection);

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


/*
let db;

let connectionString = "mongodb+srv://huso:3rcGPzoUA6UR6sSi@nestjs.77vms.mongodb.net/redis?retryWrites=true&w=majority";

MongoClient.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
      db = client.db()
   
  console.log("mongodb Connect")
    }
  )


exports.post = async function (req) {

    db.collection('phone2').insertOne({ 

    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  })

  }
*/
/*
exports.addPhone = async function (info) {
 db.phone2.insert(
  {
    name: info.body.name,
    phoneNumber: info.body.phoneNumber,
    email: info.body.email,

  },
 
)
}
*/

exports.add = async function(info){
    try{
    var newPhone = new Phone({
        id:info.id,
    name:info.name,
    lastName:info.lastName,
    email:info.email,
    phoneNumber:info.phoneNumber
 })  ;
 const savedPhone = await newPhone.save();
 return savedPhone;
    }catch(err){
        return err;
    }

}

exports.add2 = async function(info){
    try{
    var newPhone = new phone2({
    id:info.id,
    name:info.name,
    email:info.email,
    phoneNumber:info.phoneNumber
 })  ;
 const savedPhone = await newPhone.save();
 return savedPhone;
    }catch(err){
        return err;
    }

}
/*
exports.add2 = async function(info){
    try{
        db.collection('data').insertOne({ text: req.body.text })

 return savedPhone;
    }catch(err){
        return err;
    }

}
*/

exports.get = async function(query) {

    try{

        const phone = await Phone.find(query);
        return phone
    }catch(err){

        return err;
    }
}


exports.getById = async function(query) {

    try{
        const phone = await Phone.findById(query);

        return phone
    }catch(err){

        return err;
    }
}

exports.update = async function(phoneId, query){

    try{

        const uptade = await Phone.findByIdAndUpdate(
            phoneId,
            {$set: query},
            {new:true}
        );
        return uptade;

    }catch(err){

        return err;
    }
}

exports.delete = async function(query){
    
    try{

        const phoneDelete = await Phone.findByIdAndRemove(query);

        return phoneDelete

    }catch(err){
        
        console.log(err);
    }
}
