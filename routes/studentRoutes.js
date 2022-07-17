var express = require('express');
const {getAllStudent,signup,getStudentById,deleteStudent} = require('../controller/studentController');
const studentRouter = express.Router();

studentRouter.get("/",getAllStudent);
studentRouter.post("/",signup);
studentRouter.get("/:id" ,getStudentById);
studentRouter.delete("/:id",deleteStudent);
module.exports = studentRouter;