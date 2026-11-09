import mongoose from 'mongoose';
export const APPLICATION_STATUSES=['Submitted','Under Review','Shortlisted','Interview Scheduled','Selected','Rejected'];
const applicationSchema=new mongoose.Schema({
 job:{type:mongoose.Schema.Types.ObjectId,ref:'Job',required:true,index:true},
 name:{type:String,required:true,trim:true,maxlength:100},email:{type:String,required:true,lowercase:true,trim:true,index:true},
 phone:{type:String,required:true,trim:true},education:{type:String,required:true,trim:true},experience:{type:String,required:true,trim:true},
 skills:{type:String,required:true},coverLetter:{type:String,default:''},
 resume:{originalName:{type:String,required:true},storedName:{type:String,required:true},mimeType:{type:String,required:true},size:{type:Number,required:true}},
 status:{type:String,enum:APPLICATION_STATUSES,default:'Submitted'},internalNotes:[{text:{type:String,required:true},createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'Admin'},createdAt:{type:Date,default:Date.now}}]
},{timestamps:true});
applicationSchema.index({job:1,email:1},{unique:true});
applicationSchema.index({status:1,createdAt:-1});
export default mongoose.model('Application',applicationSchema);