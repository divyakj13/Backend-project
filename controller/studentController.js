const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Student}= require('../model/student');


const getAllStudent= async (req,res)=>{
    Student.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
};

const getStudentById = async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.parmas.id}`);
        Student.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
};


// const getLogin=async (req,res)=>{
// console.log(req.params.username);
// console.log(req.params.password);

//     Employee.find({username:req.params.name},{username:1,password:1,_id:0},(err,doc)=>{
//         if(doc[0].username===req.params.name && doc[0].password===req.params.password){
//             res.send("true");
//         }
//         else{
//             res.send("false");
//             console.log("false");
//             return false;
//         }
//     })
// }

const signup= async (req,res)=>{
    // console.log(emailId);
    var stu=new Student({

    username:req.body.username,
    password:req.body.password,
    regNum:req.body.regNum,
    email:req.body.email,
    phone:req.body.phone,
    Confirmpassword:req.body.Confirmpassword,
    gender:req.body.gender,
    });
    stu.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
    });
};


//  router.put('/:id',(req,res)=>{
    //     if(!ObjectId.isValid(req.params.id))
    //         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    //     var emp=new Employee({
    //         name:req.body.name,
    //         password:req.body.password,
    //         role:req.body.role
    //     });  
    //     Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
    //         if(!err){res.send(doc);}
    //         else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
    //     });
    // });

// router.put('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
//     var emp=new Employee({
//         name:req.body.name,
//         password:req.body.password,
//         role:req.body.role
//     });  
//     Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
//     });
// });

// router.delete('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
//     Employee.findByIdAndUpdate(req.params.id,(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{console.log('error in delete : '+ JSON.stringify(err,undefined,2));}
//     });
// });

//module.exports=router;










// const express = require('express');
// const router = express.Router();
// const objectId = require('mongoose').Types.ObjectId;
// var { student } = require('../model/student');



// // const {validateEmail,validateConfirm , validateUsername, validateMobile, validatePassword,validateRegister,validateGender} = require('./Validation')

// // const getAllStudent= async (req, res, next) => {
// //     let Student;
// //     try {
// //         Student = await student.find();
// //     } catch (err) {
// //         console.log(err);
// //     }
// //     if (!Student) {
// //         return res.status(404).json({ message: "No student found " });
// //     }
// //     return res.status(200).json({ Student});
// //};

// // const signup = async (req, res, next) => {
// //     const { username, email,regNum,gender, mobile,password, Confirmpassword} = req.body;    
// //     {
// //         let existingStudent;
// //         try {
// //             existingStudent = await Student.findOne({ username });
// //         } catch (err) {
// //             console.log(err);
// //         }
// //         if (existingStudent) {
// //             return res.status(400).json({ message: "Student already exists.Login instead." })
// //         }
// //         if (password == confirm) {
// //         const hashedPassword = bcrypt.hashSync(password);
// //         const hashedConfirm = bcrypt.hashSync(confirm);


    
// //     const student = new Student({
// //         username,
// //         email,
// //        gender,
// //         mobile,
// //        regNum,
// //         password: hashedPassword,
// //         Confirmpassword: hashedConfirm

// //     });

// //     try {
// //         await student.save();
// //     } catch (err) {
// //         return console.log(err);
// //     }
// //     return res.status(201).json({ student })
// // }
// // return res.status(404).json({ message: "Unable to add student"})
// //     }
// // }

// // const login = async (req, res, next) => {
// // const { username, password } = req.body;
// // let existingUser;
// // try {
// //     existingUser = await User.findOne({ username });
// // } catch (err) {
// //     console.log(err);
// // }
// // if (!existingUser) {
// //     return res.status(404).json({ message: "Couldn't find user by this username" });
// // }
// // const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
// // if (!isPasswordCorrect) {
// //     return res.status(400).json({ message: "Incorrect Password" })
// // }
// // return res.status(200).json({ message: "Login Successfull" })

// // }



// // module.exports = {
// // getUser: getAllStudent,
// // signUp: signup,
// // login: login
// // }


// // router.get('/', 
// const getAllStudent = async (req, res) => {
//     student.find((err, docs) => {
//         if (!err) {
//             res.send(docs);
//         }
//         else {
//             console.log('Error in Retrieving Student :' + JSON.stringify(err, undefined, 2));
//         }
//     });
// };

// // router.get('/:id', (req, res) => {
// //     if (!objectId.isValid(req.params.id))
// //         return res.status(400).send(`No record with given id:${req.params.id}`);

// //         Student.findById(req.params.id, (err, doc) => {
// //         if (!err) {
// //             res.send(doc);
// //         }
// //         else {
// //             console.log('Error in retriving Student data:' + JSON.stringify(err, undefined, 2))
// //         }
// //     })
// // });


// // router.post('/get', (req, res) => {
// //     var stu= new Student({
// //         name: req.body.name,
// //         registerNumber: req.body.registerNumber,
// //         DOB: req.body.DOB,
// //         phoneNumber: req.body.phoneNumber,
// //     });


// //     stu.save((err, docs) => {
// //         if (!err) {
// //             res.send(docs);
// //         }
// //         else {
// //             console.log('Error in Student save:' + JSON.stringify(err, undefined, 2));
// //         }
// //     });
// // });

// // router.get('/', (req, res) => {
// //     if (!objectId.isValid(req.params.id))
// //         return res.status(400).send(`No record with given id:${req.params.id}`);

// //         Student.findById(req.params.id, (err, doc) => {
// //         if (!err) {
// //             res.send(doc);
// //         }
// //         else {
// //             console.log('Error in retriving Student data:' + JSON.stringify(err, undefined, 2))
// //         }
// //     })
// // });

// // router.put('/update/:id', (req, res) => {
// //     if (!objectId.isValid(req.params.id))
// //         return res.status(400).send(`No record with given id:${req.params.id}`);

// //         var stu= {
// //             name: req.body.name,
// //             registerNumber: req.body.registerNumber,
// //             DOB: req.body.DOB,
// //             phoneNumber: req.body.phoneNumber,
// //         };
// //     Student.findByIdAndUpdate(req.params.id, { $set: fly }, { new: true }, (err, doc) => {
// //         if (!err) {
// //             res.send(doc);
// //         }
// //         else {
// //             console.log('Error in Student update:' + JSON.stringify(err, undefined, 2));
// //         }
// //     });
// //     });


// //     router.delete('/:id', (req, res) => {
// //         if (!objectId.isValid(req.params.id)) {
// //             return res.status(400).send(`No record with the given id:${req.params.id}`);
// //         }
// //     Student.findByIdAndRemove(req.params.id,(err,doc)=>{
// //         if(!err){
// //             res.send(doc);
// //         }
// //         else{
// //             console.log('Error in Student delete:'+JSON.stringify(err,undefined,2));
// //         }
// //     });
// //     });




// // module.exports = router;

module.exports = {
    getAllStudent:getAllStudent,
    signup:signup,
    getStudentById:getStudentById,
    getLogin:getLogin
}