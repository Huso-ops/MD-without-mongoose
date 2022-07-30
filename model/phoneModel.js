const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    lastName: {
        type: String
        
    },
    email:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required:true
    },
    isActive:{
        type: Boolean,
        default: false
    }
},{timestamps:true});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;

