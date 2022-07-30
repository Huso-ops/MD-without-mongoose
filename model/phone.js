const validator = require("express-joi-validation").createValidator({})
const collection = require("mongodb");

const schema =  ({
    name : {
        type: String,
        required: true
    },
    phoneNumber: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }
})



module.exports = schema;