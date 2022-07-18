const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;
var {Holiday}= require('../model/holiday');

const getHoliday= async (req,res)=>{
    Holiday.find((err,docs)=>{
        // if(!err){res.send(docs);}
        if(!err){res.json(docs);
        }
        else{
            res.status(404).send("error in get Holiday ")
        }
    });
};


const getHolidayById = async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Holiday.findById(req.params.id,(err,doc)=>{
    if(!err){
        res.send(doc);
      
    }
    else{
        res.status(404).send("error in get Holiday by id")    }
    });
};


const gettingHoliday = async (req,res)=>{
    var holi=new Holiday({
        date:req.body.date,
        descrip:req.body.descrip,
    });
    holi.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{ res.status(404).send("error in post holiday ")}
    });
};


const putHoliday= async (req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id :`);
    var holi={
        date:req.body.date,
        descrip:req.body.descrip,    
    };  
  
    Holiday.findByIdAndUpdate(req.params.id,{$set:holi},{new:true},(err,doc)=>{
        if(!err){res.send(doc);}
        else{ res.status(404).send("error in put holiday ")}
    });
};
const deleteHoliday=async(req,res)=>{

         if(!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with given id : ${req.parmas.id}`);
        Holiday.findByIdAndDelete(req.params.id,(err,doc)=>{
             if(!err){res.send(doc);}
            else{ res.status(404).send("error in deleting holiday ")}
      });
     };


module.exports = {
   getHoliday:getHoliday,
   gettingHoliday:gettingHoliday,
   getHolidayById:getHolidayById,
   putHoliday:putHoliday,
   deleteHoliday:deleteHoliday
}