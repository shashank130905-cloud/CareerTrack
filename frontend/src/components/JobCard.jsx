import { Link } from 'react-router-dom';
import { MapPin, Clock3, BriefcaseBusiness } from 'lucide-react';
export default function JobCard({ job }) {
  return <article className="job-card"><div className="job-card-head"><div className="company-mark">{(job.company || 'C').slice(0,1).toUpperCase()}</div><span className="pill">{job.employmentType}</span></div><h3><Link to={`/jobs/${job._id}`}>{job.title}</Link></h3><p className="company">{job.company}</p><div className="job-meta"><span><MapPin size={15}/>{job.location}</span><span><BriefcaseBusiness size={15}/>{job.experienceLevel}</span></div><div className="job-card-foot"><span className="salary">{job.salaryRange || 'Salary not disclosed'}</span><Link className="text-link" to={`/jobs/${job._id}`}>View role →</Link></div></article>;
}