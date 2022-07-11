var express = require('express');
const {getAllStudent,signup,getStudentById,deleteStudent} = require('../controller/studentController');
const studentRouter = express.Router();

studentRouter.get("/",isAuthenticatedUser,getAllStudent);
studentRouter.post("/",isAuthenticatedUser,signup);
studentRouter.get("/:id" ,isAuthenticatedUser,getStudentById);
studentRouter.delete("/:id",isAuthenticatedUser,deleteStudent);
// studentRouter.get("/:name/:password",getLogin);
module.exports = studentRouter;