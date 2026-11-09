import {Router} from 'express';
import {requireAdmin} from '../middleware/auth.js';
import {adminJobs,createJob,updateJob,deleteJob} from '../controllers/jobController.js';
import {listApplications,updateStatus,addNote,downloadResume,exportCsv,dashboard} from '../controllers/applicationController.js';
const r=Router();r.use(requireAdmin);
r.get('/dashboard',dashboard);r.get('/jobs',adminJobs);r.post('/jobs',createJob);r.patch('/jobs/:id',updateJob);r.delete('/jobs/:id',deleteJob);
r.get('/applications',listApplications);r.get('/applications/export/csv',exportCsv);r.patch('/applications/:id/status',updateStatus);r.post('/applications/:id/notes',addNote);r.get('/applications/:id/resume',downloadResume);
export default r;