const phoneService = require("../service/phoneService");
const mongojs = require("mongojs");
const url = "mongodb+srv://huso:3rcGPzoUA6UR6sSi@nestjs.77vms.mongodb.net/redis?retryWrites=true&w=majority";
const collection = ["phone2","data","phones"];
const db = mongojs(url,collection);


    exports.getPhone = (req, res) =>{

    db.phone2.find({}, (err, data) => (err ? res.send(err) : res.send(data)))
    }

    exports.getid = (req, res) => {

        db.phone2.findOne({ _id: mongojs.ObjectID(req.params.id) }, (err, data) => {

          err ? res.send(err) : res.send(data);

        });
      },

      exports.addPhone = (req, res) =>
      db.phone2.insert(
        {
          name: req.body.name,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email,
        },
        (err, data) => (err ? res.send(err) : res.send(data))
      ),

      exports.updatePhone =  function (req, res) {

        db.phone2.update(
           {_id : mongojs.ObjectID(req.params.id)} ,
          { $set:
             { 
            name: req.body.name,
            phoneNumber : req.body.phoneNumber,
            email : req.body.email      
        } },
          (err, response) => (err ? res.send(err) : res.send(response))
        );
      },
      exports.deleteDirectory = (req, res) => {
        // to remove an item from the collection by its id.
        // any parameter works.
        db.phone2.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, data) =>
          err ? res.send(err) : res.send(data)
        );
      }

