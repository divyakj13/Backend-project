const mongoose=require('mongoose');

const Student = mongoose.model('Student',{
    username:{type:String},
    password:{type:String},
    regNum:{type:String},
    email:{type:String},
    phone:{type:String},
    Confirmpassword:{type:String},
    gender:{type:String},
    role:{type:String}
});

module.exports=Student;

