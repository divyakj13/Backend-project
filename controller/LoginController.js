const express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var { Login } = require('../model/login');
const  Student = require('../model/student');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const getLogin = async (req, res) => {
    Login.find((err, docs) => {
        if (!err) { res.send(docs); }
        else {  res.status(404).send("error in login ") }
    });
};


const checking = async (req, res) => {

    const student = await Student.findOne({regNum: req.params.regNum})
    if(student==null){
            return res.status(401).json({
                message:'false'
            })
        }

        if((student.password === req.params.password && student.role===req.params.role && student.regNum===req.params.regNum)){

            let payload=req.params.regNum;        
            let token=jwt.sign(payload,process.env.ACCESS_TOKEN)
            return res.status(200).json({token , message:'true'});
}
}

const postLogin = async (req, res) => {
    var log = new Login({
        regNum: req.body.regNum,
        password: req.body.password,
        role: req.body.role
    });
    log.save((err, doc) => {
        if (!err) {
            let payload={subject:doc._id}
            let token=jwt
            res.status(200).send({ doc, message: 'registered successfully' });
        }
        else {  res.status(404).send("error in posting login") };
    });
};





module.exports = {
    getLogin: getLogin,
    postLogin: postLogin,
    checking:checking
}