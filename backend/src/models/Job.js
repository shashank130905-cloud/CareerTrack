import mongoose from 'mongoose';
const jobSchema=new mongoose.Schema({
 title:{type:String,required:true,trim:true,maxlength:120},company:{type:String,required:true,trim:true,maxlength:100},
 location:{type:String,required:true,trim:true},employmentType:{type:String,enum:['Full-time','Part-time','Contract','Internship','Remote'],required:true},
 experienceLevel:{type:String,enum:['Entry level','Mid level','Senior level','Any experience'],required:true},
 salaryRange:{type:String,default:''},description:{type:String,required:true},responsibilities:[String],qualifications:[String],skills:[String],benefits:[String],
 applicationDeadline:{type:Date,default:null},status:{type:String,enum:['draft','published','unpublished','closed'],default:'draft'},createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'Admin',required:true}
},{timestamps:true});
jobSchema.index({status:1,createdAt:-1});jobSchema.index({title:'text',company:'text',location:'text'});
export default mongoose.model('Job',jobSchema);