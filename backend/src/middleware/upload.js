import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
const dir=process.env.UPLOAD_DIR||'uploads';fs.mkdirSync(dir,{recursive:true});
const allowed=new Set(['application/pdf','application/vnd.openxmlformats-officedocument.wordprocessingml.document']);
const storage=multer.diskStorage({destination:(req,file,cb)=>cb(null,dir),filename:(req,file,cb)=>cb(null,`${crypto.randomUUID()}${path.extname(file.originalname).toLowerCase()}`)});
export const resumeUpload=multer({storage,limits:{fileSize:Number(process.env.MAX_RESUME_SIZE_MB||5)*1024*1024,files:1},fileFilter:(req,file,cb)=>{const ext=path.extname(file.originalname).toLowerCase();if(!allowed.has(file.mimetype)||!['.pdf','.docx'].includes(ext))return cb(new Error('Only PDF and DOCX résumé files are accepted'));cb(null,true);}});