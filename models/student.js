const mongoose=require('mongoose');


var Student=mongoose.model('Student',{
    name: {type:String},
    registerNumber: {type:String},
    DOB:{type:Date},
    phoneNumber:{type:Number},
    
});

module.exports={Student};