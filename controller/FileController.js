const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {File}= require('../model/file');

const getFile= async (req,res)=>{
    File.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
};


module.exports = {
    getFile:getFile
}
