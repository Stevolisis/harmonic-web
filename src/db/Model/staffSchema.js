import mongoose from 'mongoose';

const staffSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:true
  },
  day:{
    type:String,
    required:true,
    immutable:true
  },
  month:{
    type:String,
    required:true,
    immutable:true
  },
  year:{
    type:String,
    required:true,
    immutable:true
  },
},{
  timestamps: true
})


//---------------------------------------------------
module.exports=mongoose.models.Staff || mongoose.model('Staff',staffSchema);
