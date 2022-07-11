var express = require('express');
const {getHoliday,gettingHoliday,getHolidayById,putHoliday,deleteHoliday}= require('../controller/HolidayController');
const holidayRouter = express.Router();
var {isAuthenticatedUser}=require('../Middleware/auth');

holidayRouter.get("/",isAuthenticatedUser,getHoliday);
holidayRouter.post("/",isAuthenticatedUser,gettingHoliday);
holidayRouter.get("/:id" ,isAuthenticatedUser,getHolidayById);
holidayRouter.put("/:id",isAuthenticatedUser,putHoliday);
holidayRouter.delete("/:id",isAuthenticatedUser,deleteHoliday);
// studentRouter.get("/:name/:password",getLogin);
module.exports = holidayRouter;