import express from 'express';import cors from 'cors';import helmet from 'helmet';import mongoSanitize from 'express-mongo-sanitize';import rateLimit from 'express-rate-limit';import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';import jobRoutes from './routes/jobRoutes.js';import applicationRoutes from './routes/applicationRoutes.js';import adminRoutes from './routes/adminRoutes.js';import errorHandler from './middleware/error.js';
const app=express();const origins=(process.env.CORS_ORIGINS||process.env.CLIENT_URL||'http://localhost:5173').split(',').map(x=>x.trim());
app.use(helmet());app.use(cors({origin:(origin,cb)=>{if(!origin||origins.includes(origin))return cb(null,true);cb(new Error('Origin not allowed by CORS'));}}));app.use(express.json({limit:'1mb'}));app.use(express.urlencoded({extended:true,limit:'1mb'}));app.use(mongoSanitize());app.use(morgan('dev'));
app.get('/api/health',(req,res)=>res.json({status:'ok',service:'CareerTrack API'}));
app.use('/api/',rateLimit({windowMs:15*60*1000,limit:300,standardHeaders:'draft-7',legacyHeaders:false}));
app.use('/api/auth',authRoutes);app.use('/api/jobs',jobRoutes);app.use('/api/applications',applicationRoutes);app.use('/api/admin',adminRoutes);
app.use((req,res)=>res.status(404).json({message:'API route not found'}));app.use(errorHandler);export default app;