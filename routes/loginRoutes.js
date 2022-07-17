var express = require('express');
const {getLogin,postLogin,checking} = require('../controller/LoginController');
const loginRoutes = express.Router();

loginRoutes.get("/",getLogin);
loginRoutes.post("/",postLogin);
loginRoutes.get("/:regNum/:password/:role",checking);



module.exports = loginRoutes;