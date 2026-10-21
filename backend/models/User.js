const mongoose=require('mongoose');
module.exports=mongoose.model('User',new mongoose.Schema({name:String,phone:{type:String,unique:true},email:String,passwordHash:String,role:{type:String,enum:['citizen','admin','department'],default:'citizen'},department:String,verified:{type:Boolean,default:false},createdAt:{type:Date,default:Date.now}}));
