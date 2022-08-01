const express = require("express");
const app = express();
const phoneRoute = require("./route/phoneRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const http = require('http');
const fs = require('fs');

dotenv.config();
app.use(cors());
app.use(express.json());
app.options("*", cors());
app.use(bodyParser.json());

app.use("/api/phone",phoneRoute);

const server = http.createServer((req,res)=>{
  console.log(req.url, req.method);
  
  //set header content type
  res.setHeader('Content-Type', 'text/vue');
  let path ='../pb/src/';
  switch(req.url) {
    case '/look':
      path += 'App.vue';
      default:
        console.log("404")
  }
  
  // send an html file
  fs.readFile('../pb/src/App.vue', (err,data)=>{

    if(err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();

    }

  });

});



let db;

MongoClient
  .connect(process.env.MONGO_URL,
     { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
      
      db = client.db()
   
  console.log("mongodb Connect")
    }
  )

  app.listen(process.env.PORT || 8080, () => {
    console.log("server running at " + process.env.PORT );
  }
     
  );


