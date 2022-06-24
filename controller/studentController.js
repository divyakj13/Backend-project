const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;
var { Student } = require('../models/student');

router.get('/', (req, res) => {
    Student.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in Retrieving Student :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

        Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in retriving Student data:' + JSON.stringify(err, undefined, 2))
        }
    })
});


router.post('/get', (req, res) => {
    var stu= new Student({
        name: req.body.name,
        registerNumber: req.body.registerNumber,
        DOB: req.body.DOB,
        phoneNumber: req.body.phoneNumber,
    });


    stu.save((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in Student save:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

        Student.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in retriving Student data:' + JSON.stringify(err, undefined, 2))
        }
    })
});

router.put('/update/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);

        var stu= {
            name: req.body.name,
            registerNumber: req.body.registerNumber,
            DOB: req.body.DOB,
            phoneNumber: req.body.phoneNumber,
        };
    Student.findByIdAndUpdate(req.params.id, { $set: fly }, { new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in Student update:' + JSON.stringify(err, undefined, 2));
        }
    });
    });


    router.delete('/:id', (req, res) => {
        if (!objectId.isValid(req.params.id)) {
            return res.status(400).send(`No record with the given id:${req.params.id}`);
        }
    Student.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Student delete:'+JSON.stringify(err,undefined,2));
        }
    });
    });




module.exports = router;