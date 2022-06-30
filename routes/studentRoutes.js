var express = require('express');
const {getAllStudent,signup,getStudentById,getLogin} = require('../controller/studentController');
const studentRouter = express.Router();

studentRouter.get("/",getAllStudent);
studentRouter.post("/",signup);
studentRouter.get("/:id" ,getStudentById);
studentRouter.get("/:name/:password",getLogin);
module.exports = studentRouter;