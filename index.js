const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('./db.js');
const cors = require('cors');


const studentRoutes=require('./routes/studentRoutes')
const holidayRoutes=require('./routes/holidayRoutes')
const loginRoutes=require('./routes/loginRoutes')

// const fileRoutes=require('./routes/fileRoutes')
const app=express();

app.use(bodyParser.json());
app.use(cors({origin:"http://localhost:4200"}));
app.listen(3000,()=>{
    console.log('Server  started at port :3000')
});

const api=require('../Backend/routes/api');
const router = require('../Backend/routes/api');


app.use('/student',studentRoutes);
app.use('/holiday',holidayRoutes);
// app.use('/file',fileRoutes);
app.use('/login',loginRoutes);
app.use('/students',router)