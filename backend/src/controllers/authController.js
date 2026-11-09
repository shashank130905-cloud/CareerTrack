import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';
import {signToken} from '../utils/token.js';
import {asyncHandler} from '../utils/asyncHandler.js';
export const login=asyncHandler(async(req,res)=>{const email=String(req.body.email||'').toLowerCase().trim(),password=String(req.body.password||'');if(!email||!password)return res.status(400).json({message:'Email and password are required'});const admin=await Admin.findOne({email});if(!admin||!(await bcrypt.compare(password,admin.passwordHash)))return res.status(401).json({message:'Invalid email or password'});res.json({token:signToken(admin),admin:{id:admin._id,name:admin.name,email:admin.email}});});