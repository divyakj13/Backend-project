const mongoose=require('mongoose');

const Student = mongoose.model('Student',{
    username:{type:String},
    password:{type:String},
    regNum:{type:String},
    email:{type:String},
    phone:{type:String},
    Confirmpassword:{type:String},
    gender:{type:String}
});

module.exports={Student};







// var mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const studentSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique:true,
//     },
//     regNum:{
//         type:String,
//         required:true,
//         unique:true,

//     },
//     email: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         required: true
//     },

//     phone: {
//         type: Number,
//         required: true,
//         unique: true,
//     },
//     gender:{
//         type:String,
//         required:true,
//     },

//     password: {
//         type: String,
//         required: true,
//         trim: true,
//         unique: true
//     },
//     Confirmpassword: {
//         type: String,
//         required: true
//     }


// });

// module.exports=mongoose.model("student",studentSchema);