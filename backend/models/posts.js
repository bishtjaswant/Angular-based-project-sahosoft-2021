const mongoose = require('mongoose');

const postSchema= new mongoose.Schema({
   title:{type:String,required:true},
   sort_desc:{type:String,required:true},
   full_desc:{type:String,required:true},
  image:{type:String,required:true},
  author:{type:String,required:true},
  isActive:{type:Boolean,required:true},
}, {
  timestamps:true,
  collection:"posts",
});


module.exports= mongoose.model('posts',postSchema);
