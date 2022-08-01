const express = require("express");
const app = express();
const phoneRoute = require("./route/phoneRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

dotenv.config();
app.use(cors());
app.use(express.json());
app.options("*", cors());
app.use(bodyParser.json());

app.use("/api/phone",phoneRoute);

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


