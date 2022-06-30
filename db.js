const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Divyakj:Divya13@cluster0.20ov0qy.mongodb.net/studentManagement?retryWrites=true&w=majority',(err)=>{
    if(!err)
    console.log("Mongodb has been connected successfully");
    else
    console.log("Error in Connection: "+JSON.stringify(err,undefined,2));

});
module.exports=mongoose;