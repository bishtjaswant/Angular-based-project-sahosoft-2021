const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema= new mongoose.Schema({
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  email:{type:String,required:true},
  phone:{type:String,required:true},
  password:{type:String,required:true},
  gender:{type:String,required:true},
  country:{type:String,required:true},
}, {
  timestamps:true,
  collection:"users",
});

userSchema.pre('save', async function (next) {
  try {
    /*
    Here first checking if the document is new by using a helper of mongoose .isNew, therefore, this.isNew is true if document is new else false, and we only want to hash the password if its a new document, else  it will again hash the password if you save the document again by making some changes in other fields incase your document contains other fields.
    */
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(this.password, salt)
      this.password = hashedPassword
    }
    next()
  } catch (error) {
    next(error)
  }

});



userSchema.methods.validatePassword  = async function (pwd)  {
  try {
    return await bcrypt.compare(pwd, this.password);
  } catch (error) {
    throw error;
  }
}





module.exports= mongoose.model('users',userSchema);
