const mongojs = require("mongojs");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO_URL;
const collection = ["phone2","data","phones"];
const db = mongojs(url,collection);

    //Get Phone Directory
    exports.getPhone = (req, res) =>{

       db.phone2.find({}, (err, data) => (err ? res.send(err) : res.send(data)))
       
    }
    //Get Phone By Id
    exports.getById = (req, res) => {

       db.phone2.findOne({ _id: mongojs.ObjectID(req.params.id) }, (err, data) => {

          err ? res.send(err) : res.send(data);

        });
      },
      //Add Phone
      exports.addPhone = (req, res) =>
        db.phone2.insert(
        {

          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,

        },
        (err, data) => (err ? res.send(err) : res.send(data))
      ),
      //Update Phone
      exports.updatePhone =  function (req, res) {

         db.phone2.update(

           {_id : mongojs.ObjectID(req.params.id)} ,
           { $set:
             { 
            name: req.body.name,
            phoneNumber : req.body.phoneNumber,
            email : req.body.email     

        }
       },
          (err, response) => (err ? res.send(err) : res.send(response))
        );
      },
      //Delete Phone
      exports.deleteDirectory = (req, res) => {

         db.phone2.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, data) =>
          err ? res.send(err) : res.send(data)

        );

      }

