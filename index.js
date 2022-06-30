const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('./db.js');
const cors = require('cors');


var studentRoutes=require('./routes/studentRoutes')
const app=express();

app.use(bodyParser.json());
app.use(cors());
app.listen(3000,()=>{
    console.log('Server  started at port :3000')
});

app.use('/student',studentRoutes);