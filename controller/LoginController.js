const express = require('express');
var router = express.Router();
//var ObjectId = require('mongoose').Types.ObjectId;
const bodyParser = require('body-parser');
var { Login } = require('../model/login');
const  Student = require('../model/student');
const jwt = require('jsonwebtoken');
require('dotenv').config()



const getLogin = async (req, res) => {
    Login.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('error in retriving : ' + JSON.stringify(err, undefined, 2)); }
    });
};

// const getLoginById = async (req, res) => {
//     // if(!ObjectId.isValid(req.params.id))
//     // return res.status(400).send(`No record with given id : ${req.parmas.id}`);
//     Login.findById({ regNum: req.params.regNum }, (err, doc) => {
//         if (!err) {
//             console.log(doc[0].role);
//             res.status(200).json({ role: doc[0].roleval });
//         }
//         else { console.log('Error in retriving  dataaa: ' + JSON.stringify(err, undefined, 2)); }
//     });
// };

const checking = async (req, res) => {
    console.log(req.params.regNum);
    console.log(req.params.password);
    //console.log(req.params.role);

    // const studentsss = await Student.find({})
    const student = await Student.findOne({regNum: req.params.regNum})
    //     (err, doc) => {
    //     console.log(doc);
    //    console.log("ithu document");
    //     console.log(doc[0].password);
    //     console.log(doc[0].regNum);
    // console.log("student is",studentsss)

        //   if (doc.regNum === req.params.regNum && doc.password === req.params.password) {
            if(student==null){
            return res.status(401).json({
                message:'false'
            })
        }
        if(!(student.password === req.params.password)){
            return res.status(401).json({
                message:'false'
            })
        }
        console.log("no error")
            let payload=req.params.regNum;
            // console.log(payload)
            // console.log("twdv"+payload);
            
            let token=jwt.sign(payload,process.env.ACCESS_TOKEN)
            console.log(token)
            return res.status(200).json({token , message:'true'});
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
        else { console.log('error in save : ' + JSON.stringify(err, undefined, 2)); }
    });
};





module.exports = {
    getLogin: getLogin,
    // getLoginById: getLoginById,
    postLogin: postLogin,
    checking:checking
}