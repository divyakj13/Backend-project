const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('./db.js');
const cors = require('cors');


const studentRoutes=require('./routes/studentRoutes')
const holidayRoutes=require('./routes/holidayRoutes')
const loginRoutes=require('./routes/loginRoutes')

const app=express();

app.use(bodyParser.json());

app.use(cors({origin:"http://localhost:4200"}));

app.listen(3000,()=>{
    console.log('Server  started at port :3000')
});



app.use('/student',studentRoutes);
app.use('/holiday',holidayRoutes);
app.use('/login',loginRoutes);
