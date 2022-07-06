const mongoose=require('mongoose');

const Holiday = mongoose.model('Holiday',{  
    date:{type:Date },
    descrip:{type:String},
});

module.exports={Holiday};

