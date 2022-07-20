const express = require('express');
var { Login } = require('../model/login');
const  Student = require('../model/student');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const getLogin =  (req, res) => {
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



module.exports = {
    getLogin: getLogin,
    checking:checking
}