var express = require('express');
const {getLogin,checking} = require('../controller/LoginController');
const loginRoutes = express.Router();

loginRoutes.get("/",getLogin);
loginRoutes.get("/:regNum/:password/:role",checking);



module.exports = loginRoutes;