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
      },
      /*   { $set: req },
          {new : true},*/

exports.add = async function (req, res,next){
    try{
        var phone = await phoneService.add(req.body);
        console.log(phone);
        return res.status(201).json({data: req.body, status: 201, massage: "Success"});
    }catch(error){
        return res.status(404).json({error: error, status:400});
    }
}


exports.add2 = async function (req, res,next){
    try{
        var phone = await phoneService.add2(req.body);
        console.log(phone);
        return res.status(201).json({data: req.body, status: 201, massage: "Success"});
    }catch(error){
        console.log(error);
        return res.status(404).json({error: error, status:400});
        
    }
}

exports.post = async function (req, res,next){
    try{
        var phone = await phoneService.post(req.body);
        console.log(phone);
        return res.status(201).json({data: req.body, status: 201, massage: "Success"});
    }catch(error){
        console.log(error);
        return res.status(404).json({error: error, status:400});
        
    }
}

exports.get = async function (req, res, next){
    try{
        let phone = await phoneService.get({});
        console.log(phone);
        return res.status(201).json({data: phone, status: 201, massage: "Success"});
    }catch(error){
        return res.status(404).json({error: error, status:400});
    }
}
exports.update = async function (req, res, next){

    try{

        const update = await phoneService.update(req.params.id, req.body);

        console.log(update);

        return res.status(201).json({status:201, data:update, message:'Success'});
        
    }catch(err){

        return res.status(404).json({ err: error, status:404});
    }
}

exports.getById = async function (req, res, next){

    try{
//_id:
        const phone = await phoneService.getById({_id:req.params.id});

        console.log(phone);
        return res.status(201).json({data: phone, status: 201, massage: "Success"});


    }catch(error){

        return res.status(404).json({error: error, status:400});
    }
}

exports.delete = async function (req, res ,next){
    try{
        
        const phone = await phoneService.delete(req.params.id);

  return res.status(201).json({data: phone, status: 201, massage: "Success"});

}catch(err){
    return res.status(404).json({error: error, status:400});
}
}