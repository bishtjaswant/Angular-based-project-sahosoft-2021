const mongoose = require('mongoose');

const ContactSchema= new mongoose.Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  email:{type:String,required:true},
  phone:{type:String,required:true},
  msg:{type:String,required:true},
}, {
  timestamps:true,
  collection:"contacts",
});

module.exports= mongoose.model('contact',ContactSchema);
