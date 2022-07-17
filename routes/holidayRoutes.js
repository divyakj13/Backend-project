var express = require('express');
const {getHoliday,gettingHoliday,getHolidayById,putHoliday,deleteHoliday}= require('../controller/HolidayController');
const holidayRouter = express.Router();

holidayRouter.get("/",getHoliday);
holidayRouter.post("/",gettingHoliday);
holidayRouter.get("/:id" ,getHolidayById);
holidayRouter.put("/:id",putHoliday);
holidayRouter.delete("/:id",deleteHoliday);

module.exports = holidayRouter;