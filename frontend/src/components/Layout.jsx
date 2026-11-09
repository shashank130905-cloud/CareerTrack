import { Link, NavLink } from 'react-router-dom';
import { BriefcaseBusiness } from 'lucide-react';
export default function Layout({ children }) {
  return <><header className="topbar"><Link to="/" className="brand"><span className="brand-icon"><BriefcaseBusiness size={20}/></span>CareerTrack</Link><nav><NavLink to="/">Find jobs</NavLink><NavLink to="/admin/login">Recruiter login</NavLink></nav></header><main>{children}</main><footer>CareerTrack · Connecting talent with opportunity</footer></>;
}