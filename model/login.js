const mongoose=require('mongoose');

const Login = mongoose.model('Login',{
    regNum:{type:String},
    password:{type:String},
    role:{type:String}

});

module.exports={Login};