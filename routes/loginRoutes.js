var express = require('express');
const {getLogin,getLoginById, postLogin,checking} = require('../controller/LoginController');
const loginRoutes = express.Router();

loginRoutes.get("/",isAuthenticatedUser,getLogin);
loginRoutes.post("/",isAuthenticatedUser,postLogin);
loginRoutes.get("/:regNum/:password/:role",checking);



module.exports = loginRoutes;