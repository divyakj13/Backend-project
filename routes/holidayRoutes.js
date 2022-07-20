var express = require('express');
const {getHoliday,gettingHoliday,getHolidayById,putHoliday,deleteHoliday}= require('../controller/HolidayController');
const holidayRoutes = express.Router();
const {isAuthenticatedUser}=require('../Middlewares/auth')

holidayRoutes.get("/",getHoliday);
holidayRoutes.post("/",isAuthenticatedUser,gettingHoliday);
holidayRoutes.get("/:id" ,isAuthenticatedUser,getHolidayById);
holidayRoutes.put("/:id",isAuthenticatedUser,putHoliday);
holidayRoutes.delete("/:id",isAuthenticatedUser,deleteHoliday);

module.exports = holidayRoutes;