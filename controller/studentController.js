const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var  Student  = require('../model/student');


const getAllStudent =  (req, res) => {
    Student.find((err, docs) => {
        if (!err) { res.send(docs); }
        else {  res.status(404).send("error in getting student") }
    });
};

const getStudentById =  (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    Student.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {  res.status(404).send("error in getting student by id ")}
    });
};

const signup =  (req, res) => {
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
        else { res.status(404).send("error in posting student")`` }
    });
};

const deleteStudent =  (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with the given id : $(req.params.id)`);
    try {
        Student.findByIdAndRemove(req.params.id, (err, data) => {
            res.status(200).send(data)
        });
    }
    catch (err) {
        return res.status(404).send("error in deleting student ")
    }
};


module.exports = {
    getAllStudent: getAllStudent,
    signup: signup,
    getStudentById: getStudentById,
    deleteStudent: deleteStudent
}