const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('./db.js');
const cors = require('cors');


var studentRoutes=require('./routes/studentRoutes')
var holidayRoutes=require('./routes/holidayRoutes')
var fileRoutes=require('./routes/fileRoutes')
const app=express();

app.use(bodyParser.json());
app.use(cors({origin:"http://localhost:4200"}));
app.listen(3000,()=>{
    console.log('Server  started at port :3000')
});

app.use('/student',studentRoutes);
app.use('/holiday',holidayRoutes);
app.use('/file',fileRoutes);