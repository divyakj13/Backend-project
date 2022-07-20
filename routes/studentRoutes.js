var express = require('express');
const {getAllStudent,signup,getStudentById,deleteStudent} = require('../controller/studentController');
const studentRoutes = express.Router();
const isAuthenticatedUser=require('../Middlewares/auth')

studentRoutes.get("/",getAllStudent);
studentRoutes.post("/",signup);
studentRoutes.get("/:id" ,getStudentById);
studentRoutes.delete("/:id",deleteStudent);
module.exports = studentRoutes;