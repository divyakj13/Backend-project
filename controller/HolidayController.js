const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Holiday}= require('../model/holiday');
// const { put } = require('../routes/holidayRoutes');


const getHoliday= async (req,res)=>{
    Holiday.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
};


const getHolidayById = async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.parmas.id}`);
        Holiday.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
};


const gettingHoliday = async (req,res)=>{
  
    var holi=new Holiday({

        date:req.body.date,
        descrip:req.body.descrip,
    
    });
    holi.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
    });
};


const putHoliday= async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    console.log(req.params.id)
    var holi={
        date:req.body.date,
        descrip:req.body.descrip,    
    };  
  
    Holiday.findByIdAndUpdate(req.params.id,{$set:holi},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save put holi : '+ JSON.stringify(err,undefined,2));}
    });
};
const deleteHoliday=async(req,res)=>{

         if(!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.parmas.id}`);
        Holiday.findByIdAndDelete(req.params.id,(err,doc)=>{
             if(!err){res.send(doc);}
            else{console.log('error in delete : '+ JSON.stringify(err,undefined,2));}
      });
     };


module.exports = {
   getHoliday:getHoliday,
   gettingHoliday:gettingHoliday,
   getHolidayById:getHolidayById,
   putHoliday:putHoliday,
   deleteHoliday:deleteHoliday
}