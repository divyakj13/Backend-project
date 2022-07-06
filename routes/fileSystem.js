var express = require('express');
const {getFile}= require('../controller/FileController');


FileRouter.get("/",getFile);



module.exports = FileRouter;