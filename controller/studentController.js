const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var  Student  = require('../model/student');


const getAllStudent = async (req, res) => {
    Student.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('error in retriving : ' + JSON.stringify(err, undefined, 2)); }
    });
};

const getStudentById = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    Student.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retriving : ' + JSON.stringify(err, undefined, 2)); }
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

const signup = async (req, res) => {
    var stu = new Student({

        username: req.body.username,
        password: req.body.password,
        regNum: req.body.regNum,
        email: req.body.email,
        phone: req.body.phone,
        Confirmpassword: req.body.Confirmpassword,
        gender: req.body.gender,
        role:'user'
    });
    stu.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('error in save : ' + JSON.stringify(err, undefined, 2)); }
    });
};

const deleteStudent = async (req, res) => {

    //     if(!ObjectId.isValid(req.params.id))
    //        return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    //    Student.findByIdAndDelete(req.params.id,(err,doc)=>{
    //         if(!err){res.send(doc);}
    //        else{console.log('error in delete : '+ JSON.stringify(err,undefined,2));}
    //  });
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);

    try {

        Student.findByIdAndRemove(req.params.id, (err, data) => {
            res.status(200).send(data)
        });

    }
    catch (err) {
        return res.status(400).send("error in delete Features ")
    }
};


module.exports = {
    getAllStudent: getAllStudent,
    signup: signup,
    getStudentById: getStudentById,
    deleteStudent: deleteStudent
}